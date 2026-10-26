"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ProjectsError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Projects error caught:", error);
  }, [error]);

  return (
    <div className="error-box">
      <h3>Failed to load project information</h3>
      <p>{error.message || "An unexpected error occurred while loading projects."}</p>
      <div style={{ display: "flex", gap: "0.75rem" }}>
        <button className="btn btn-danger" onClick={() => reset()}>
          Retry
        </button>
        <Link href="/projects" className="btn">
          Back to Projects List
        </Link>
      </div>
    </div>
  );
}
