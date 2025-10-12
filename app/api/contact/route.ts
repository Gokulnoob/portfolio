import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Rate limiting - simple in-memory store (in production, use Redis or DB)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // 5 requests per window

  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (record.count >= maxRequests) {
    return true;
  }

  record.count++;
  return false;
}

function sanitizeInput(input: string): string {
  return input.trim().slice(0, 1000); // Limit to 1000 characters
}

function validateEmail(email: string): boolean {
  return emailRegex.test(email) && email.length <= 254;
}

function validateName(name: string): boolean {
  return (
    name.length >= 2 && name.length <= 100 && /^[a-zA-Z\s\-']+$/.test(name)
  );
}

function validateMessage(message: string): boolean {
  return message.length >= 10 && message.length <= 1000;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // Check rate limit
    if (isRateLimited(clientIP)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please wait before submitting again.",
          retryAfter: 15 * 60, // 15 minutes in seconds
        },
        { status: 429 }
      );
    }

    const formData = await request.formData();
    const name = sanitizeInput((formData.get("name") ?? "").toString());
    const email = sanitizeInput(
      (formData.get("email") ?? "").toString().toLowerCase()
    );
    const message = sanitizeInput((formData.get("message") ?? "").toString());

    // Validation
    const errors: string[] = [];

    if (!name) {
      errors.push("Name is required");
    } else if (!validateName(name)) {
      errors.push(
        "Name must be 2-100 characters and contain only letters, spaces, hyphens, and apostrophes"
      );
    }

    if (!email) {
      errors.push("Email is required");
    } else if (!validateEmail(email)) {
      errors.push("Please provide a valid email address");
    }

    if (!message) {
      errors.push("Message is required");
    } else if (!validateMessage(message)) {
      errors.push("Message must be between 10-1000 characters");
    }

    // Check for spam patterns
    const spamPatterns = [
      /https?:\/\//gi, // URLs
      /\b(buy|sale|discount|offer|deal|free|win|prize)\b/gi, // Common spam words
      /(viagra|casino|lottery|inheritance)/gi, // Obvious spam
    ];

    const combinedText = `${name} ${email} ${message}`.toLowerCase();
    const spamScore = spamPatterns.reduce((score, pattern) => {
      const matches = combinedText.match(pattern);
      return score + (matches ? matches.length : 0);
    }, 0);

    if (spamScore > 2) {
      errors.push("Message appears to be spam");
    }

    if (errors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          errors,
          message: "Please correct the errors and try again",
        },
        { status: 400 }
      );
    }

    // Log the contact submission (in production, save to database)
    const submission = {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      ip: clientIP,
      userAgent: request.headers.get("user-agent") || "unknown",
    };

    console.log("[CONTACT SUBMISSION]", submission);

    // TODO: In production, you would:
    // 1. Save to database
    // 2. Send email notification (using services like SendGrid, Nodemailer, etc.)
    // 3. Send auto-response to user
    // 4. Add to CRM or contact management system

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Check if this is a form submission expecting redirect vs API call
    const contentType = request.headers.get("content-type");
    const acceptHeader = request.headers.get("accept") || "";

    if (
      contentType?.includes("application/x-www-form-urlencoded") &&
      !acceptHeader.includes("application/json")
    ) {
      // Traditional form submission - redirect
      return NextResponse.redirect(
        new URL("/contact?submitted=1", request.url),
        {
          status: 303,
        }
      );
    }

    // API call - return JSON
    return NextResponse.json({
      success: true,
      message:
        "Thank you for your message! I'll get back to you within 24 hours.",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("[CONTACT API ERROR]", error);

    const contentType = request.headers.get("content-type");
    const acceptHeader = request.headers.get("accept") || "";

    if (
      contentType?.includes("application/x-www-form-urlencoded") &&
      !acceptHeader.includes("application/json")
    ) {
      return NextResponse.redirect(new URL("/contact?error=1", request.url), {
        status: 303,
      });
    }

    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again later.",
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
