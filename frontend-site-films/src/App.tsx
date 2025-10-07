import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import FilmList from "./components/FilmList";
import FilmForm from "./components/FilmForm";
import "./styles.css";

// Composant principal de l'application.
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Nav />
        <p><strong>Bonjour!</strong> Bienvenue sur ce petit projet permettant de lister vos films favoris! <strong>Comme demandé</strong> j'ai ajouté la fonctionnalités pour <strong>voir</strong>
        , <strong>ajouter</strong> et <strong>supprimer</strong> des choses de la liste des films de la base de données.</p>
        <p>J'espère que mon code sera satisfaisant, j'ai fais de mon mieux en peu de temps, et je suis bien entendu ouvert aux critiques.</p>
        <p><strong>Pierre LEDEUIL</strong></p>
        <Routes>
          <Route path="/" element={<FilmList />} />
          <Route path="/add" element={<FilmForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
