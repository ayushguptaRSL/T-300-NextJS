"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ProjectError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Project error caught:", error);
  }, [error]);

  return (
    <div className="error-box">
      <h3>Failed to load project details</h3>
      <p>{error.message || "An unexpected error occurred while loading this project."}</p>
      <div style={{ display: "flex", gap: "0.75rem" }}>
        <button className="btn btn-danger" onClick={() => reset()}>
          Retry Loading
        </button>
        <Link href="/projects" className="btn">
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
