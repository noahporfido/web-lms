import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const drukWideBold = localFont({
  src: "./fonts/DrukWideBold.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Les Mecs Sportifs",
  description: "Les Mecs Sportifs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${drukWideBold.className} ${drukWideBold.className} antialiased  w-screen h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
