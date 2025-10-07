import { useEffect, useState } from "react";
import { fetchFilms, removeFilm, Film } from "../api";
import FilmItem from "./FilmItem";
import { useNavigate } from "react-router-dom";

export default function FilmList() {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  async function onDelete(id: number) {
    if (!window.confirm("Supprimer ce film ?")) return;
    try {
      await removeFilm(id);
      setFilms((prev) => prev.filter((f) => f.id !== id));
    } catch {
      alert("Erreur de suppression");
    }
  }

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
