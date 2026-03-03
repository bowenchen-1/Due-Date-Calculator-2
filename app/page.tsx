import type { Metadata } from "next";
import HomePage from "../components/home-page";

export const metadata: Metadata = {
  title: "Pregnancy Due Date Calculator | Pregnancy Timeline Tool",
  description:
    "Calculate your due date using LMP or conception date. Get a clear pregnancy timeline, gestational age, and a privacy-safe export.",
  keywords: [
    "pregnancy due date calculator",
    "due date calculator",
    "pregnancy calculator",
    "conception due date calculator",
    "gestational age calculator"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Pregnancy Due Date Calculator",
    description:
      "Calculate your due date from LMP or conception date and view a clear, printable pregnancy timeline.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/logo-full.png",
        alt: "Pregnancy Timeline Tool"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pregnancy Due Date Calculator",
    description:
      "Calculate your due date from LMP or conception date and view a clear, printable pregnancy timeline.",
    images: ["/logo-full.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
};

export default function Page() {
  return <HomePage />;
}
