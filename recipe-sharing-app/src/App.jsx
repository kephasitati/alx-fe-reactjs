import { Routes, Route } from 'react-router-dom';  // Remove extra Link if not needed here
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <SearchBar />
      <AddRecipeForm />
      <RecipeList />
      <Routes>
        <Route path="/recipe/:recipeId" element={<RecipeDetails recipeId />} />  // Pass recipeId if needed, but use useParams inside
      </Routes>
    </div>
  );
}

export default App;