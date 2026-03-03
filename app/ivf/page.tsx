import type { Metadata } from "next";
import IvfPage from "../../components/ivf-page";

export const metadata: Metadata = {
  title: "IVF Due Date Calculator | Embryo Transfer Date",
  description:
    "Calculate your IVF due date based on your embryo transfer date, including 3-day and 5-day transfers. Get an estimated delivery date instantly.",
  keywords: [
    "ivf due date calculator",
    "embryo transfer due date calculator",
    "ivf pregnancy calculator",
    "day 3 embryo due date",
    "day 5 embryo due date"
  ],
  alternates: {
    canonical: "/ivf"
  },
  openGraph: {
    title: "IVF Due Date Calculator",
    description:
      "Calculate your IVF due date based on your embryo transfer date, including 3-day and 5-day transfers. Get an estimated delivery date instantly.",
    type: "website",
    url: "/ivf",
    images: [
      {
        url: "/logo-full.png",
        alt: "Pregnancy Timeline Tool"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "IVF Due Date Calculator",
    description:
      "Calculate your IVF due date based on your embryo transfer date, including 3-day and 5-day transfers. Get an estimated delivery date instantly.",
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
  return <IvfPage />;
}
