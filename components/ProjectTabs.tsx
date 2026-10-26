"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface ProjectTabsProps {
  projectId: string;
}

export default function ProjectTabs({ projectId }: ProjectTabsProps) {
  const pathname = usePathname();

  const tabs = [
    { label: "Overview", href: `/projects/${projectId}`, exact: true },
    { label: "Team", href: `/projects/${projectId}/team` },
    { label: "Tasks", href: `/projects/${projectId}/tasks` },
    { label: "Activity", href: `/projects/${projectId}/activity` },
    { label: "Documentation", href: `/projects/${projectId}/docs` }
  ];

  const isTabActive = (tabHref: string, exact?: boolean) => {
    if (exact) {
      return pathname === tabHref;
    }
    return pathname.startsWith(tabHref);
  };

  return (
    <nav className="project-tabs">
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={isTabActive(tab.href, tab.exact) ? "tab-active" : ""}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}
