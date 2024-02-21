import { useState } from "react";
import "./App.scss";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRecipeSelect = (recipeId: number) => {
    setSelectedRecipeId(recipeId);
    setIsModalOpen(true); // Abrir o modal ao selecionar uma receita
  };

  const closeModal = () => {
    setSelectedRecipeId(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <span>Boas vindas,</span>
          </div>
        </div>
      </header>
      <div className="container">
        <section>
          <RecipeList onRecipeSelect={handleRecipeSelect} />
        </section>
        {isModalOpen && (
          <div className="modal-container">
            <div className="modal">
              <RecipeDetails id={selectedRecipeId!} />
              <button onClick={closeModal} className="modal-close-button">
                X
            </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

