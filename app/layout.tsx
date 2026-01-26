import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pregnancy Timeline Tool",
  description: "Pregnancy due date calculator with a clear timeline and privacy-safe export."
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
