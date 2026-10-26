import { getProjectById } from "@/data/projects";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectTasksPage({ params }: PageProps) {
  const { id } = await params;
  const project = await getProjectById(id);

  return (
    <div className="card">
      <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>
        Project Tasks ({project.tasks.length})
      </h2>
      <p style={{ color: "var(--text-secondary)", marginBottom: "1rem", fontSize: "0.9rem" }}>
        Milestones and deliverables scheduled for this project.
      </p>

      <div>
        {project.tasks.map((task) => (
          <div key={task.id} className="item-row">
            <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
              <input
                type="checkbox"
                defaultChecked={task.completed}
                disabled
              />
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  color: task.completed ? "var(--text-muted)" : "inherit"
                }}
              >
                {task.title}
              </span>
            </div>
            <span
              className={`badge badge-${
                task.completed ? "completed" : "on-hold"
              }`}
            >
              {task.completed ? "Completed" : "Pending"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
