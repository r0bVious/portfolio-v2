import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Mono } from "next/font/google";

const monoFont = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Robert J. Spano - Let's Get to Work!",
  description:
    "Welcome to my portfolio! I am Robert J. Spano, a growing developer with a strong background in consumer tech, sales, and international relations. Explore my projects, skills, and professional journey as I continue developing myself to better serve the tech community in Seoul and beyond!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monoFont.className}`}>{children}</body>
    </html>
  );
}
