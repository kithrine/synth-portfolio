import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KT — Developer & Designer",
  description:
    "Katherine Tensfeldt — AI Enthusiast & Full Stack Developer. Retro-futuristic developer portfolio.",
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
