export default function SettingsPage() {
  return (
    <div>
      <div className="card">
        <h1 style={{ marginBottom: "0.5rem" }}>Settings</h1>
        <p style={{ color: "var(--text-secondary)" }}>
          Manage your Project Explorer portal configuration and preferences.
        </p>
      </div>

      <div className="card">
        <h2 style={{ fontSize: "1.1rem", marginBottom: "1rem" }}>Portal Preferences</h2>

        <div className="item-row">
          <div>
            <strong>Email Notifications</strong>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Receive daily digest for task changes and project updates
            </p>
          </div>
          <input type="checkbox" defaultChecked />
        </div>

        <div className="item-row">
          <div>
            <strong>Compact Layout</strong>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Display denser project tables and smaller card previews
            </p>
          </div>
          <input type="checkbox" />
        </div>

        <div className="item-row">
          <div>
            <strong>Default Projects Filter</strong>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Initial status filter applied when visiting the Projects page
            </p>
          </div>
          <select className="filter-select" defaultValue="active">
            <option value="all">All Statuses</option>
            <option value="active">Active Only</option>
            <option value="completed">Completed Only</option>
          </select>
        </div>
      </div>
    </div>
  );
}
