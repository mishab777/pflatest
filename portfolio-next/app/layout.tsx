import type { Metadata } from "next";
import "./globals.css";
import { personal } from "@/lib/data";

export const metadata: Metadata = {
  title: `${personal.name} — ${personal.title}`,
  description: personal.bio,
  icons: {
    icon: personal.favicon,
  },
  openGraph: {
    title: `${personal.name} — ${personal.title}`,
    description: personal.bio,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} — ${personal.title}`,
    description: personal.bio,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-ink text-white font-sans antialiased">{children}</body>
    </html>
  );
}
