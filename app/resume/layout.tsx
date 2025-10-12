import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Gokul G",
  description:
    "Download or preview the latest resume for Gokul G, Frontend Developer and AI/ML enthusiast.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
