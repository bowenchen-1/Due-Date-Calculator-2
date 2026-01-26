import type { Metadata } from "next";
import IvfPage from "../../components/ivf-page";

export const metadata: Metadata = {
  title: "IVF Due Date Calculator | Pregnancy Timeline Tool",
  description:
    "Calculate an IVF due date using embryo transfer details. View gestational age, timeline milestones, and export a privacy-safe summary.",
  alternates: {
    canonical: "/ivf"
  },
  openGraph: {
    title: "IVF Due Date Calculator",
    description:
      "Calculate an IVF due date using embryo transfer details and view a clear pregnancy timeline.",
    type: "website",
    url: "/ivf"
  },
  twitter: {
    card: "summary",
    title: "IVF Due Date Calculator",
    description:
      "Calculate an IVF due date using embryo transfer details and view a clear pregnancy timeline."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function Page() {
  return <IvfPage />;
}
