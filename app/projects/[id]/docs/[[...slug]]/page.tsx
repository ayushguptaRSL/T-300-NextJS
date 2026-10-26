import Link from "next/link";
import { getProjectById } from "@/data/projects";

interface PageProps {
  params: Promise<{
    id: string;
    slug?: string[];
  }>;
}

export default async function ProjectDocsPage({ params }: PageProps) {
  const { id, slug } = await params;
  const project = await getProjectById(id);

  const segments = slug || [];
  const fullPath = `/projects/${id}/docs${segments.length > 0 ? `/${segments.join("/")}` : ""}`;

  return (
    <div>
      <div className="card">
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
          Project Documentation
        </h2>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "1rem" }}>
          Documentation and resource explorer for {project.name}.
        </p>

        <div style={{ marginBottom: "1rem" }}>
          <strong>Requested Path:</strong>
          <div className="code-box">{fullPath}</div>
        </div>

        <div>
          <strong>Route Segments:</strong>
          <div className="code-box">
            {segments.length > 0
              ? JSON.stringify(segments)
              : "[] (Root documentation)"}
          </div>
        </div>
      </div>

      <div className="card">
        <h3 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>
          Documentation Content
        </h3>

        {segments.length === 0 && (
          <div>
            <p style={{ color: "var(--text-secondary)", marginBottom: "0.75rem" }}>
              Welcome to the central documentation hub for <strong>{project.name}</strong>.
              Select one of the sample sections below or type any nested route segments in the URL.
            </p>
          </div>
        )}

        {segments[0] === "setup" && segments.length === 1 && (
          <div>
            <h4 style={{ fontSize: "0.95rem", marginBottom: "0.5rem" }}>
              Setup & Installation Guide
            </h4>
            <p style={{ color: "var(--text-secondary)", marginBottom: "0.75rem" }}>
              Follow these steps to configure your local development environment for {project.name}.
            </p>
            <div className="code-box">
              git clone https://github.com/organization/{project.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}.git<br />
              npm install<br />
              npm run dev
            </div>
          </div>
        )}

        {segments[0] === "setup" && segments[1] === "database" && (
          <div>
            <h4 style={{ fontSize: "0.95rem", marginBottom: "0.5rem" }}>
              Database Configuration
            </h4>
            <p style={{ color: "var(--text-secondary)", marginBottom: "0.75rem" }}>
              Database connection settings and migration instructions for {project.name}.
            </p>
            <div className="code-box">
              DATABASE_URL="postgresql://user:password@localhost:5432/project_db"<br />
              npx prisma migrate dev
            </div>
          </div>
        )}

        {segments.length > 0 &&
          !(segments[0] === "setup" && (segments.length === 1 || segments[1] === "database")) && (
            <div>
              <h4 style={{ fontSize: "0.95rem", marginBottom: "0.5rem" }}>
                Section: {segments.join(" / ")}
              </h4>
              <p style={{ color: "var(--text-secondary)" }}>
                Displaying documentation resources for segment:{" "}
                <code>{segments.join(" > ")}</code>.
              </p>
            </div>
          )}
      </div>

      <div className="card">
        <h4 style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>
          Test Documentation URLs:
        </h4>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <Link href={`/projects/${id}/docs`} className="btn">
            /projects/{id}/docs
          </Link>
          <Link href={`/projects/${id}/docs/setup`} className="btn">
            /projects/{id}/docs/setup
          </Link>
          <Link href={`/projects/${id}/docs/setup/database`} className="btn">
            /projects/{id}/docs/setup/database
          </Link>
        </div>
      </div>
    </div>
  );
}
