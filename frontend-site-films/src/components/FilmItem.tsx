import { Film } from "../api";

interface Props {
  film: Film;
  onDelete: (id: number) => void;
}
// Composant pour afficher un film individuel dans la liste.
export default function FilmItem({ film, onDelete }: Props) {
  return (
    <li className="film-item">
      <div>
        <strong>{film.title}</strong> ({film.year})
      </div>
      <button onClick={() => onDelete(film.id)}>🗑️ Supprimer</button>
    </li>
  );
}
