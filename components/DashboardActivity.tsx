import { getDashboardRecentActivity } from "@/data/projects";

export default async function DashboardActivity() {
  const activities = await getDashboardRecentActivity();

  return (
    <div className="card">
      <h3 style={{ fontSize: "1rem", marginBottom: "0.75rem" }}>
        Recent Organization Activity
      </h3>
      <div>
        {activities.map((item) => (
          <div key={item.id} className="item-row">
            <div>
              <strong>{item.project}</strong>: {item.action}
            </div>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
              {item.timestamp}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
