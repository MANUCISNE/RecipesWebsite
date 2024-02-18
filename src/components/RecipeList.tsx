import React from "react";
import recipesData from "../data/recipesData.json";

type Recipe = {
  id: number;
  title: string;
  category: string;
  image: string;
};

type RecipeListProps = {
  onRecipeSelect: (recipeId: number) => void;
};

const RecipeList: React.FC<RecipeListProps> = ({ onRecipeSelect }) => {
  return (
    <div className="recipe-card-container">
      {recipesData.recipes.map((recipe: Recipe) => (
        <div
          key={recipe.id}
          className="recipe-card"
          onClick={() => onRecipeSelect(recipe.id)}
        >
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />
          <p>{recipe.category}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;

