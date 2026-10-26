import { getProjectById } from "@/data/projects";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectTeamPage({ params }: PageProps) {
  const { id } = await params;
  const project = await getProjectById(id);

  return (
    <div className="card">
      <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>
        Team Members ({project.team.length})
      </h2>
      <p style={{ color: "var(--text-secondary)", marginBottom: "1rem", fontSize: "0.9rem" }}>
        Assigned collaborators working on {project.name}.
      </p>

      <div>
        {project.team.map((member, idx) => (
          <div key={idx} className="item-row">
            <div>
              <strong>{member.name}</strong>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                {member.role}
              </div>
            </div>
            <span className="badge" style={{ backgroundColor: "#f3f4f6", color: "#374151" }}>
              Active Member
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
