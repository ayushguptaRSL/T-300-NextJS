"use client";

import { useEffect, useState } from "react";

interface FavoriteButtonProps {
  projectId: string;
}

export default function FavoriteButton({ projectId }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const favorites = JSON.parse(localStorage.getItem("project_favorites") || "[]");
    setIsFavorite(favorites.includes(projectId));
  }, [projectId]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const favorites: string[] = JSON.parse(
      localStorage.getItem("project_favorites") || "[]"
    );
    let updated: string[];
    if (favorites.includes(projectId)) {
      updated = favorites.filter((id) => id !== projectId);
      setIsFavorite(false);
    } else {
      updated = [...favorites, projectId];
      setIsFavorite(true);
    }
    localStorage.setItem("project_favorites", JSON.stringify(updated));
  };

  if (!mounted) {
    return (
      <button className="btn" type="button" aria-label="Toggle favorite">
        ☆ Favorite
      </button>
    );
  }

  return (
    <button
      className="btn"
      type="button"
      onClick={toggleFavorite}
      style={{
        borderColor: isFavorite ? "#f59e0b" : undefined,
        color: isFavorite ? "#b45309" : undefined,
        backgroundColor: isFavorite ? "#fef3c7" : undefined
      }}
    >
      {isFavorite ? "★ Favorited" : "☆ Favorite"}
    </button>
  );
}
