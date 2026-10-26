import Link from "next/link";
import { Suspense } from "react";
import { getProjectById } from "@/data/projects";
import ProjectTabs from "@/components/ProjectTabs";
import FavoriteButton from "@/components/FavoriteButton";

interface ProjectLayoutProps {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}

export default async function ProjectLayout({
  children,
  params
}: ProjectLayoutProps) {
  const { id } = await params;
  const project = await getProjectById(id);

  return (
    <div>
      <div style={{ marginBottom: "1rem" }}>
        <Link
          href="/projects"
          style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}
        >
          ← Back to Projects
        </Link>
      </div>

      <div className="project-header">
        <div className="project-title-row">
          <div>
            <h1 style={{ fontSize: "1.35rem", marginBottom: "0.25rem" }}>
              {project.name}
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              {project.description}
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span className={`badge badge-${project.status}`}>{project.status}</span>
            <FavoriteButton projectId={project.id} />
          </div>
        </div>
      </div>

      <Suspense fallback={<div style={{ height: "40px" }} />}>
        <ProjectTabs projectId={id} />
      </Suspense>

      <div>{children}</div>
    </div>
  );
}
