export default function AboutPage() {
  return (
    <div>
      <div className="card">
        <h1 style={{ marginBottom: "0.75rem" }}>About Project Explorer</h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: "1rem" }}>
          Project Explorer is an organizational project management hub designed to give
          teams visibility into ongoing initiatives, team composition, task milestones,
          and documentation.
        </p>
      </div>

      <div className="card">
        <h2 style={{ fontSize: "1.1rem", marginBottom: "0.75rem" }}>Architecture Overview</h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: "0.75rem" }}>
          This application demonstrates modern Next.js App Router patterns:
        </p>
        <ul style={{ paddingLeft: "1.25rem", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <li><strong>Shared & Nested Layouts:</strong> Preserving layout state across sections and dynamic routes.</li>
          <li><strong>Server & Client Components:</strong> Streaming server components alongside hydrated interactive client components.</li>
          <li><strong>Dynamic & Catch-all Routes:</strong> Flexible project detail sections and nested documentation pages.</li>
          <li><strong>Suspense Streaming:</strong> Non-blocking data streaming with React Suspense.</li>
          <li><strong>Built-in Loading & Error Handling:</strong> Graceful loading skeletons and error boundaries with retry capabilities.</li>
        </ul>
      </div>
    </div>
  );
}
