import { Suspense } from "react";
import Link from "next/link";
import { getProjects } from "@/data/projects";
import ProjectFilter from "@/components/ProjectFilter";
import FavoriteButton from "@/components/FavoriteButton";

interface ProjectsPageProps {
  searchParams: Promise<{
    search?: string;
    status?: string;
  }>;
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const resolvedParams = await searchParams;
  const search = resolvedParams?.search || "";
  const status = resolvedParams?.status || "all";

  const projects = await getProjects(search, status);

  return (
    <div>
      <div className="card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h1 style={{ marginBottom: "0.25rem" }}>Projects Explorer</h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              Explore and manage organizational projects, tasks, and documentation.
            </p>
          </div>
          <Link href="/projects/error" className="btn btn-danger" style={{ fontSize: "0.8rem" }}>
            Test Error Boundary
          </Link>
        </div>
      </div>

      <Suspense fallback={<div className="loading-box">Loading filters...</div>}>
        <ProjectFilter initialSearch={search} initialStatus={status} />
      </Suspense>

      <div style={{ marginBottom: "1rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
        Showing {projects.length} {projects.length === 1 ? "project" : "projects"}
        {search && ` matching "${search}"`}
        {status !== "all" && ` with status "${status}"`}
      </div>

      {projects.length === 0 ? (
        <div className="card" style={{ textAlign: "center", padding: "2.5rem" }}>
          <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>
            No projects found matching the specified filters.
          </p>
          <Link href="/projects" className="btn">
            Clear Filters
          </Link>
        </div>
      ) : (
        <div className="project-list-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <h2 style={{ fontSize: "1.05rem" }}>{project.name}</h2>
                  <span className={`badge badge-${project.status}`}>{project.status}</span>
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "0.75rem" }}>
                  {project.description}
                </p>
                <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  Tasks: {project.tasks.filter((t) => t.completed).length} / {project.tasks.length} completed
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.5rem" }}>
                <Link href={`/projects/${project.id}`} className="btn btn-primary">
                  View Project →
                </Link>
                <FavoriteButton projectId={project.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
