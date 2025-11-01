import type { Metadata } from "next";
import "./globals.css";
import { WEDDING_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: `${WEDDING_CONFIG.coupleNames}'s Wedding`,
  description: `Join us for our wedding celebration on October 26, 2026 in Napa Valley, California`,
  openGraph: {
    title: `${WEDDING_CONFIG.coupleNames}'s Wedding`,
    description: `Join us for our wedding celebration on October 26, 2026 in Napa Valley, California`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
