import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import RecipeSearch from "./components/RecipeSearch";

const Rotas: React.FC = () => {
  return (
    <Router>
      <Route path="/" Component={RecipeList} />
      <Route path="/recipe/:id" Component={RecipeDetails} />
      <Route path="/search" Component={RecipeSearch} />
    </Router>
  );
};

export default Rotas;
