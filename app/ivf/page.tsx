import type { Metadata } from "next";
import IvfPage from "../../components/ivf-page";

export const metadata: Metadata = {
  title: "IVF Due Date Calculator | Pregnancy Timeline Tool",
  description:
    "Calculate an IVF due date using embryo transfer details. View gestational age, timeline milestones, and export a privacy-safe summary.",
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
      "Calculate an IVF due date using embryo transfer details and view a clear pregnancy timeline.",
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
      "Calculate an IVF due date using embryo transfer details and view a clear pregnancy timeline.",
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
