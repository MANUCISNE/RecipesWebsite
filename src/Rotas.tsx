import React, { useState } from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

const Rotas: React.FC = () => {
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);

  const handleRecipeSelect = (recipeId: number) => {
    setSelectedRecipeId(recipeId);
  };

  return (
    <Router>
      <Route
        element={
          <Link to="/">
            <RecipeList onRecipeSelect={handleRecipeSelect} />
          </Link>
        }
        path="/"
      />

      {selectedRecipeId && (
        <Route
          element={
            <Link to={`/recipe/${selectedRecipeId}`}>
              <RecipeDetails id={selectedRecipeId} />
            </Link>
          }
          path="/recipe/:id"
        />
      )}
    </Router>
  );
};

export default Rotas;