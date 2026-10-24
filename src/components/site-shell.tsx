"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, personal } from "@/data/portfolio";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"night" | "day">("night");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    const next = saved === "day" ? "day" : "night";
    setTheme(next);
    document.documentElement.dataset.theme = next;
  }, []);

  const toggleTheme = () => {
    const next = theme === "night" ? "day" : "night";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("portfolio-theme", next);
  };

  return (
    <div className="app-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href="/" aria-label="ShohanAlfaz home">ShohanAlfaz</Link>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span />
          </button>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
            {navigation.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return <Link key={item.href} href={item.href} className={active ? "active" : undefined} onClick={() => setMenuOpen(false)}>{item.label}</Link>;
            })}
          </nav>
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "night" ? "day" : "night"} mode`} title={`${theme} mode`}>
            <span className={theme === "day" ? "is-active" : ""} aria-hidden="true">☀</span>
            <span className={theme === "night" ? "is-active" : ""} aria-hidden="true">☾</span>
          </button>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="footer-inner">
          <div><Link className="footer-brand" href="/">ShohanAlfaz</Link><p>Junior Web Developer in Dhaka, Bangladesh.</p></div>
          <div className="footer-links"><a href={`mailto:${personal.email}`}>Email</a><a href={personal.links.github} target="_blank" rel="noreferrer">GitHub</a><a href={personal.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div>
          <p className="copyright">© {new Date().getFullYear()} Shohan Hossain Alfaz</p>
        </div>
      </footer>
    </div>
  );
}
