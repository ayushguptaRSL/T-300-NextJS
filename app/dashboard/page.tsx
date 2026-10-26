import { Suspense } from "react";
import DashboardStats from "@/components/DashboardStats";
import DashboardActivity from "@/components/DashboardActivity";

function StatsFallback() {
  return (
    <div className="loading-box" style={{ marginBottom: "1.25rem" }}>
      <span className="spinner" />
      Streaming project statistics...
    </div>
  );
}

function ActivityFallback() {
  return (
    <div className="loading-box">
      <span className="spinner" />
      Streaming recent activity feed...
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div>
      <div className="card">
        <h1 style={{ marginBottom: "0.5rem" }}>Organization Dashboard</h1>
        <p style={{ color: "var(--text-secondary)" }}>
          Central hub for real-time portfolio metrics, progress tracking, and recent activity.
        </p>
      </div>

      <Suspense fallback={<StatsFallback />}>
        <DashboardStats />
      </Suspense>

      <Suspense fallback={<ActivityFallback />}>
        <DashboardActivity />
      </Suspense>
    </div>
  );
}
