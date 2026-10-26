"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Settings", href: "/settings" }
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="site-header">
      <div className="header-container">
        <Link href="/" className="brand-title">
          Project Explorer
        </Link>
        <nav className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
