import { useState } from "react";
import "./App.scss";
import RecipeSearch from "./components/RecipeSearch";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(
    null
  );

  const handleRecipeSelect = (recipeId: number) => {
    setSelectedRecipeId(recipeId);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <span>Boas vindas, [nome da pessoa]</span>
          </div>
        </div>
      </header>
      <div className="container">
        <section>
          <h2>Buscar Receitas</h2>
          <RecipeSearch />
        </section>
        <section>
          <h2>Lista de Receitas</h2>
          <RecipeList onRecipeSelect={handleRecipeSelect} />
        </section>
        <section>
          <h2>Itens da Receita</h2>
          {selectedRecipeId && <RecipeDetails id={selectedRecipeId} />}
        </section>
      </div>
    </>
  );
}

export default App;
