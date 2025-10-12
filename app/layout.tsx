import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CommandMenu, { type CommandItem } from "./components/CommandMenu";
import Navigation from "./components/Navigation";
import ErrorBoundary from "./components/ErrorBoundary";
import ViewportDebugger from "./components/ViewportDebugger";
import { WebVitals } from "./components/WebVitals";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gokulg.dev"),
  title: "Gokul G — Frontend Developer Portfolio",
  description:
    "Portfolio of Gokul G, MCA graduate specializing in React, Flutter, and AI/ML. View projects including MyAnimeTracker, RAG Assistant, and StudyPro.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Flutter Developer",
    "AI/ML Developer",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Firebase",
    "Python",
    "Portfolio",
    "MCA Graduate",
    "Tamil Nadu",
    "India",
  ],
  authors: [{ name: "Gokul G", url: "https://gokulg.dev" }],
  creator: "Gokul G",
  publisher: "Gokul G",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gokulg.dev",
    title: "Gokul G — Frontend Developer Portfolio",
    description:
      "Portfolio of Gokul G, MCA graduate specializing in React, Flutter, and AI/ML. View projects including MyAnimeTracker, RAG Assistant, and StudyPro.",
    siteName: "Gokul G Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Gokul G - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gokul G — Frontend Developer Portfolio",
    description:
      "Portfolio of Gokul G, MCA graduate specializing in React, Flutter, and AI/ML.",
    images: ["/profile.jpg"],
    creator: "@gokul",
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  category: "technology",
};

const commandItems: CommandItem[] = [
  {
    label: "Hero intro",
    href: "#top",
    description: "Jump back to the opening headline and ripple card.",
  },
  {
    label: "Navigation grid",
    href: "#projects",
    description: "Open the Bento grid of portfolio routes.",
  },
  {
    label: "Highlights",
    href: "#insights",
    description:
      "Explore product mindset, performance, and accessibility pillars.",
  },
  {
    label: "Experience timeline",
    href: "#experience",
    description: "Review recent milestones, internships, and wins.",
  },
  {
    label: "Showcase lab",
    href: "#showcase",
    description: "See the 3D card stack and motion lab experiments.",
  },
  {
    label: "Contact",
    href: "#contact",
    description: "Reach out for internships or freelance collaborations.",
  },
  {
    label: "Send an email",
    href: "mailto:hello@gokulg.dev",
    description: "Compose an email to Gokul with your project idea.",
    shortcut: "Mail",
  },
  {
    label: "Schedule a call",
    href: "https://cal.com",
    description: "Open the booking calendar in a new tab.",
    shortcut: "Call",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#071021" />
        <meta name="color-scheme" content="dark" />
        <link rel="canonical" href="https://gokulg.dev" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#071021] text-white antialiased`}
      >
        <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
          <div id="aurora-root" className="h-full w-full" />
        </div>
        {/* Skip link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-500 text-white px-4 py-2 rounded-md z-50 transition-all"
        >
          Skip to main content
        </a>

        <Navigation />
        <ErrorBoundary>
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
        </ErrorBoundary>
        <CommandMenu items={commandItems} />
        <ViewportDebugger />
        <WebVitals />
      </body>
    </html>
  );
}
