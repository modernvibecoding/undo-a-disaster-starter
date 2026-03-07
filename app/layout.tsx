import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Undo a Disaster Cleanly",
  description: "Starter for the Undo a Disaster Cleanly guided project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
