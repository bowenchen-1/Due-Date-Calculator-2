import type { Metadata } from "next";
import IvfPage from "../../components/ivf-page";
import { SITE_URL } from "../../lib/site-url";

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
    canonical: `${SITE_URL}/ivf`
  },
  openGraph: {
    title: "IVF Due Date Calculator",
    description:
      "Calculate your IVF due date based on your embryo transfer date, including 3-day and 5-day transfers. Get an estimated delivery date instantly.",
    type: "website",
    url: `${SITE_URL}/ivf`,
    images: [
      {
        url: "/logo.png",
        alt: "Due Date Calculator logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "IVF Due Date Calculator",
    description:
      "Calculate your IVF due date based on your embryo transfer date, including 3-day and 5-day transfers. Get an estimated delivery date instantly.",
    images: ["/logo.png"]
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
