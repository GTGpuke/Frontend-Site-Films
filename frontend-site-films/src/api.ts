const BASE = "http://localhost:4000/api"; // URL de l’API mis en dur par facilité.

export interface Film {
  id: number;
  title: string;
  year: number;
}

// Récupèrer la liste des films.
export async function fetchFilms(): Promise<Film[]> {
  const res = await fetch(`${BASE}/films`);
  if (!res.ok) throw new Error("Erreur de chargement");
  return res.json();
}

// Ajouter un film.
export async function createFilm(payload: Omit<Film, "id">): Promise<Film> {
  const res = await fetch(`${BASE}/films`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Erreur d’ajout");
  return res.json();
}

// Supprimer un film.
export async function removeFilm(id: number): Promise<void> {
  const res = await fetch(`${BASE}/films/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Erreur de suppression");
}
