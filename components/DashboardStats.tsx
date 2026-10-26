import { getDashboardStats } from "@/data/projects";

export default async function DashboardStats() {
  const stats = await getDashboardStats();

  return (
    <div className="stats-grid">
      <div className="stat-box">
        <div className="stat-number">{stats.total}</div>
        <div className="stat-label">Total Projects</div>
      </div>
      <div className="stat-box">
        <div className="stat-number">{stats.active}</div>
        <div className="stat-label">Active</div>
      </div>
      <div className="stat-box">
        <div className="stat-number">{stats.completed}</div>
        <div className="stat-label">Completed</div>
      </div>
      <div className="stat-box">
        <div className="stat-number">{stats.completedTasks}/{stats.totalTasks}</div>
        <div className="stat-label">Tasks Done</div>
      </div>
    </div>
  );
}
