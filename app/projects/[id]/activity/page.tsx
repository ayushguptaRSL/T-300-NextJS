import { getProjectById } from "@/data/projects";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectActivityPage({ params }: PageProps) {
  const { id } = await params;
  const project = await getProjectById(id);

  return (
    <div className="card">
      <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>
        Recent Project Activity
      </h2>
      <p style={{ color: "var(--text-secondary)", marginBottom: "1rem", fontSize: "0.9rem" }}>
        Audit trail and recent actions logged on {project.name}.
      </p>

      <div>
        {project.activity.map((item) => (
          <div key={item.id} className="item-row">
            <div>{item.action}</div>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              {item.timestamp}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
