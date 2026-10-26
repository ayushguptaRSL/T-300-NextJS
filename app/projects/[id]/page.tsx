import { getProjectById } from "@/data/projects";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectOverviewPage({ params }: PageProps) {
  const { id } = await params;
  const project = await getProjectById(id);

  const completedTasks = project.tasks.filter((t) => t.completed).length;

  return (
    <div className="card">
      <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>
        Project Overview
      </h2>
      <p style={{ color: "var(--text-secondary)", marginBottom: "1.25rem" }}>
        {project.description}
      </p>

      <div className="stats-grid">
        <div className="stat-box">
          <div className="stat-number">{project.team.length}</div>
          <div className="stat-label">Team Members</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">
            {completedTasks}/{project.tasks.length}
          </div>
          <div className="stat-label">Tasks Completed</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">{project.activity.length}</div>
          <div className="stat-label">Activity Logs</div>
        </div>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <h3 style={{ fontSize: "0.95rem", marginBottom: "0.5rem" }}>
          Current Status
        </h3>
        <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
          Project is currently marked as{" "}
          <strong style={{ textTransform: "capitalize" }}>{project.status}</strong>.
        </p>
      </div>
    </div>
  );
}
