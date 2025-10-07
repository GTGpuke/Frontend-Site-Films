import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav">
      <h1>Mes Films préférés</h1>
      <div>
        <Link to="/">Liste</Link>
        {" | "}
        <Link to="/add">Ajouter</Link>
      </div>
    </nav>
  );
}
