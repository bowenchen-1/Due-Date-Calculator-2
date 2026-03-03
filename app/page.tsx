import type { Metadata } from "next";
import HomePage from "../components/home-page";

export const metadata: Metadata = {
  title: "Pregnancy Due Date Calculator | Calculate by LMP or Conception",
  description:
    "Calculate your pregnancy due date using your last menstrual period (LMP) or conception date. Get an estimated pregnancy timeline and week-by-week overview instantly.",
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
      "Calculate your pregnancy due date using your last menstrual period (LMP) or conception date. Get an estimated pregnancy timeline and week-by-week overview instantly.",
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
      "Calculate your pregnancy due date using your last menstrual period (LMP) or conception date. Get an estimated pregnancy timeline and week-by-week overview instantly.",
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
