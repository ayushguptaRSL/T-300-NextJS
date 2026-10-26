import Link from "next/link";
import { projectsData } from "@/data/projects";

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <h4>Dashboard Hub</h4>
        <ul className="dashboard-nav">
          <li>
            <Link href="/dashboard">Overview</Link>
          </li>
          <li>
            <Link href="/projects">All Projects</Link>
          </li>
        </ul>

        <h4 style={{ marginTop: "1.25rem" }}>Quick Projects</h4>
        <ul className="dashboard-nav">
          {projectsData.map((project) => (
            <li key={project.id}>
              <Link href={`/projects/${project.id}`}>{project.name}</Link>
            </li>
          ))}
        </ul>
      </aside>

      <section>{children}</section>
    </div>
  );
}
