"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState, useTransition } from "react";

interface ProjectFilterProps {
  initialSearch?: string;
  initialStatus?: string;
}

export default function ProjectFilter({
  initialSearch = "",
  initialStatus = "all"
}: ProjectFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [status, setStatus] = useState(initialStatus);

  const applyFilters = (newSearch: string, newStatus: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (newSearch.trim()) {
      params.set("search", newSearch.trim());
    } else {
      params.delete("search");
    }

    if (newStatus && newStatus !== "all") {
      params.set("status", newStatus);
    } else {
      params.delete("status");
    }

    startTransition(() => {
      const query = params.toString();
      router.push(query ? `${pathname}?${query}` : pathname);
    });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters(searchTerm, status);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setStatus(val);
    applyFilters(searchTerm, val);
  };

  const handleReset = () => {
    setSearchTerm("");
    setStatus("all");
    startTransition(() => {
      router.push(pathname);
    });
  };

  return (
    <form className="filter-bar" onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Search projects by name or description..."
        className="filter-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        className="filter-select"
        value={status}
        onChange={handleStatusChange}
      >
        <option value="all">All Statuses</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
        <option value="on-hold">On Hold</option>
      </select>
      <button type="submit" className="btn btn-primary" disabled={isPending}>
        {isPending ? "Filtering..." : "Search"}
      </button>
      {(searchTerm || status !== "all") && (
        <button
          type="button"
          className="btn"
          onClick={handleReset}
          disabled={isPending}
        >
          Reset
        </button>
      )}
    </form>
  );
}
