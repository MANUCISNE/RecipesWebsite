import React, { useState } from 'react';
import recipesData from '../data/recipesData.json';

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

type RecipesData = {
  recipes: Recipe[];
};

const RecipeSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Recipe[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const results = (recipesData as RecipesData).recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value === '') {
      setSearchResults([]);
    }
  };

  return (
    <div className="RecipeSearch">
      <form className="RecipeSearch-search-form" onSubmit={handleSearch}>
        <input
          className="RecipeSearch-search-input"
          type="text"
          placeholder="Buscar por título"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="RecipeSearch-search-button" type="submit">
          Buscar
        </button>
      </form>
      <div className="RecipeSearch-recipe-list">
        {searchResults.map((recipe) => (
          <div key={recipe.id} className="RecipeSearch-recipe-card">
            <h2>{recipe.title}</h2>
            <p>{recipe.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;
