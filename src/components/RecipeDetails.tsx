import React from "react";
import recipesData from "../data/recipesData.json";

type Recipe = {
  id: number;
  title: string;
  category: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  prepTime: string;
  servings: string;
  vegetarian: boolean;
  glutenFree: boolean;
  videoUrl: string | null;
};

const RecipeDetails: React.FC<{ id: number }> = ({ id }) => {
  const recipe = recipesData.recipes.find(
    (recipe: Recipe) => recipe.id === id
  );

  if (!recipe) return null;

  return (
    <div className="recipeDetails-details-container">
      <div className="recipeDetails-card">
        <div className="recipeDetails-image">
          <img src={recipe.image} alt={recipe.title} />
          <div className="recipeDetails-section">
            <p>Porções: {recipe.servings}</p>
            <p>Tempo de Preparo: {recipe.prepTime}</p>
            {recipe.vegetarian && <p>Esta receita é vegetariana.</p>}
            {recipe.glutenFree && <p>Esta receita é sem glúten.</p>}
            {recipe.videoUrl && (
            <div>
              {recipe.videoUrl && (
                <div>
                  <p>
                    <a
                      href={recipe.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="recipeDetails-video-button"
                    >
                      Assistir vídeo
                    </a>
                  </p>
                </div>
              )}
            </div>
          )}
          </div>
        </div>
        <div>
          <div>
            <h2>{recipe.title}</h2>
            <p className="recipeDetails-category">Categoria: {recipe.category}</p>
          </div>
          <div className="recipeDetails-section">
            <h3>Ingredientes:</h3>
            <ul className="recipeDetails-ingredient-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="recipeDetails-section">
            <h3>Modo de Preparo:</h3>
            <ol className="recipeDetails-instruction-list">
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
