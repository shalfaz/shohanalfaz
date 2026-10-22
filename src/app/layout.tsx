import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shohan Hossain Alfaz | Full-Stack Web Developer",
  description:
    "Portfolio of Shohan Hossain Alfaz, a junior full-stack web developer and CSE student at ULAB in Dhaka, Bangladesh.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
