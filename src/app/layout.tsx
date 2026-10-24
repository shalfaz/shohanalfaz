import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Shohan Hossain Alfaz | Junior Web Developer",
  description:
    "Portfolio of Shohan Hossain Alfaz, a junior web developer building responsive React.js, Next.js, and TypeScript applications.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="night" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t==='day'?'day':'night'}catch(e){document.documentElement.dataset.theme='night'}` }} />
      </head>
      <body><SiteShell>{children}</SiteShell></body>
    </html>
  );
}
