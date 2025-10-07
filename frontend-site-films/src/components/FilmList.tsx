import { useEffect, useState } from "react";
import { fetchFilms, removeFilm, Film } from "../api";
import FilmItem from "./FilmItem";
import { useNavigate } from "react-router-dom";

// Composant pour afficher la liste des films.
export default function FilmList() {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

// Charger les films au montage du composant.
  useEffect(() => {
    async function load() {
      try {
        const data = await fetchFilms();
        setFilms(data);
      } catch {
        alert("Erreur de chargement");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

// Supprimer un film.
  async function onDelete(id: number) {
    if (!window.confirm("Supprimer ce film ?")) return;
    try {
      await removeFilm(id);
      setFilms((prev) => prev.filter((f) => f.id !== id));
    } catch {
      alert("Erreur de suppression");
    }
  }

// Code HTML de la liste des films.
  return (
    <div>
      <div className="header">
        <h2>Liste des films</h2>
        <button onClick={() => navigate("/add")}>Ajouter</button>
      </div>
      {loading ? (
        <p>Chargement...</p>
      ) : films.length === 0 ? (
        <p>Aucun film</p>
      ) : (
        <ul className="film-list">
          {films.map((film) => (
            <FilmItem key={film.id} film={film} onDelete={onDelete} />
          ))}
        </ul>
      )}
    </div>
  );
}
