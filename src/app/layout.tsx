import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "PINNAWALA ELEPHANT TOUR | Pinnawala, Sri Lanka",
  description:
    "Experience respectful daily elephant routines along the Maha Oya river, stay in 4 private luxury cabanas at Luck Uyana or 7 boutique rooms at Pinnawala Reach, and explore our living Ayurveda herbal medicine sanctuary in Sri Lanka.",
  keywords: [
    "Pinnawala Elephant Tour",
    "Luck Uyana Cabana",
    "Pinnawala Reach",
    "Sri Lanka elephant bath",
    "Ayurveda Herbal Medicine Garden Pinnawala",
    "Pinnawala accommodation",
    "Sri Lanka custom itineraries",
  ],
  authors: [{ name: "Pinnawala Elephant Tour" }],
  openGraph: {
    title: "Pinnawala Elephant Tour & Luck Uyana Cabana",
    description:
      "Gentle Giants, Sacred Waters, Untamed Serenity at Pinnawala. Discover authentic elephant daily routines, eco-cabana stays, and Ayurvedic wellness.",
    url: "https://pinnawalaelephanttour.com",
    siteName: "Pinnawala Elephant Tour",
    images: [
      {
        url: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Elephants in Maha Oya River Pinnawala",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
