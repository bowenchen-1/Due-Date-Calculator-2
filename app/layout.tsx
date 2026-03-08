import "./globals.css";
import type { Metadata, Viewport } from "next";
import { SITE_URL } from "../lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Due Date Calculator",
  title: "Due Date Calculator",
  description: "Pregnancy due date calculator with a clear timeline and privacy-safe export.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
