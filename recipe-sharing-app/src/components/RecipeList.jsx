import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const { recipes, searchTerm, filteredRecipes } = useRecipeStore((state) => ({
    recipes: state.recipes,
    searchTerm: state.searchTerm,
    filteredRecipes: state.filteredRecipes,
  }));

  const displayRecipes = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      {displayRecipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;