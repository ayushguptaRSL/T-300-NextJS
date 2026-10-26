import Link from "next/link";
import { projectsData } from "@/data/projects";

export default function HomePage() {
  const activeCount = projectsData.filter((p) => p.status === "active").length;
  const completedCount = projectsData.filter((p) => p.status === "completed").length;

  return (
    <div>
      <div className="card" style={{ padding: "2rem" }}>
        <h1 style={{ marginBottom: "0.5rem" }}>Welcome to Project Explorer</h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: "1.25rem" }}>
          A lightweight project management portal built with Next.js App Router.
          Browse projects, inspect real-time metrics, view team workloads, and navigate project documentation.
        </p>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <Link href="/projects" className="btn btn-primary">
            Explore Projects →
          </Link>
          <Link href="/dashboard" className="btn">
            Open Dashboard
          </Link>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-box">
          <div className="stat-number">{projectsData.length}</div>
          <div className="stat-label">Total Projects</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">{activeCount}</div>
          <div className="stat-label">Active Projects</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">{completedCount}</div>
          <div className="stat-label">Completed</div>
        </div>
      </div>

      <div className="card">
        <h2 style={{ marginBottom: "1rem", fontSize: "1.1rem" }}>Featured Projects</h2>
        <div className="project-list-grid">
          {projectsData.slice(0, 2).map((project) => (
            <div key={project.id} className="project-card">
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                  <h3 style={{ fontSize: "1rem" }}>{project.name}</h3>
                  <span className={`badge badge-${project.status}`}>{project.status}</span>
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                  {project.description}
                </p>
              </div>
              <Link href={`/projects/${project.id}`} className="btn" style={{ textAlign: "center" }}>
                View Project Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
