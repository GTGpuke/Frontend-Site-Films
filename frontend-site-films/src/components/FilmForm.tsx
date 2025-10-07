import { useState } from "react";
import { createFilm } from "../api";
import { useNavigate } from "react-router-dom";

// Formulaire pour ajouter un film.
export default function FilmForm() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title || !year) return alert("Titre et année requis !");
    setSaving(true);
    try {
      await createFilm({ title, year: Number(year) });
      navigate("/");
    } catch {
      alert("Erreur d’ajout");
    } finally {
      setSaving(false);
    }
  }
  
  //Code HTML du formulaire.
  return (
    <form onSubmit={onSubmit} className="form">
      <h2>Ajouter un film</h2>
      <label>
        Titre
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ex: Inception"
        />
      </label>
      <label>
        Année
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="2010"
        />
      </label>
      <div>
        <button type="submit" disabled={saving}>
          {saving ? "Enregistrement..." : "Ajouter"}
        </button>
        <button type="button" onClick={() => navigate("/")}>
          Annuler
        </button>
      </div>
    </form>
  );
}
