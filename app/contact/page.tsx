import type { Metadata } from "next";
import ContactPageWithSuspense from "../components/ContactPageWrapper";

export const metadata: Metadata = {
  title: "Contact — Gokul G",
  description:
    "Get in touch with Gokul G for internships, freelance collaborations, or community workshops. Quick response guaranteed.",
};

export default function ContactPage() {
  return <ContactPageWithSuspense />;
}
