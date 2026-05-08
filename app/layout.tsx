import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rebekah in DUEN",
  description: "A small starter website for Rebekah.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
