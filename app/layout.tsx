import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aisha & Ben's Wedding",
  description: "Join us for our wedding celebration on October 26, 2026 in Napa Valley, California",
  openGraph: {
    title: "Aisha & Ben's Wedding",
    description: "Join us for our wedding celebration on October 26, 2026 in Napa Valley, California",
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
