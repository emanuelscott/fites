import type { Metadata } from "next";
import 'react-slideshow-image/dist/styles.css';
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "ESFitness",
  description:
    "Are you tired of feeling stuck, overwhelmed, or like there’s never enough time to focus on yourself? Emanuel Scott Fitness helps you break free, rebuild your confidence, and take control of your body, mind, and future. No matter how busy life gets, imagine waking up stronger, more focused, and ready to thrive. Your transformation starts now—because you’re worth it!",
  icons: {
    icon: [
      { url: "https://www.esfitness.io/preview.png", sizes: "16x16", type: "image/jpg" },
      { url: "https://www.esfitness.io/preview.png", sizes: "any", type: "image/jpg" },
    ],
  },
  openGraph: {
    title: "ESFitness",
    description:
      "Are you tired of feeling stuck, overwhelmed, or like there’s never enough time to focus on yourself? Emanuel Scott Fitness helps you break free, rebuild your confidence, and take control of your body, mind, and future. No matter how busy life gets, imagine waking up stronger, more focused, and ready to thrive. Your transformation starts now—because you’re worth it!",
    url: "https://www.esfitness.io",
    images: [
      {
        url: "https://www.esfitness.io/preview.png",
        width: 1200,
        height: 630,
        alt: "ESFitness",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
