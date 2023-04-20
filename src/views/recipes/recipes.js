import classes from './recipes.module.css'
import RecipesGenerator from '../../components/recipesGenerator/recipesGenerator'
import { useState } from 'react';
import Spinner from '../../components/spinner/spinner';
import RecipeResponse from '../../components/recipeResponse/recipeResponse';

const Recipes = () => {
  const [recipe, setRecipe] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchRecipes = (data) => {
    setLoading(true);
    setRecipe('');
    setError(null);

    fetch('http://127.0.0.1:8000/recipe?' + new URLSearchParams(data))
    .then(response => {
      if(!response.ok) {
        throw new Error('Something went wrong!');
      }
      return response.json();
    })
    .then(data => {
      setRecipe(data.message);
      setLoading(false);
    })
    .catch(error => {
      setError(error.message);
      setLoading(false);
    })
  }

  return (
    <div className={classes.wrapper}>
      <h1>Recipes</h1>
      <div className={classes.recipesWrapper}>
        <RecipesGenerator onSubmit={fetchRecipes}/>
        {recipe && <RecipeResponse recipe={recipe}/>}
      </div>
      <Spinner
        loading={loading}
        size={60}
        color="#ff7a22"
      />
      {error && <p className={classes.error}>{error}</p>}
    </div>
  )
}

export default Recipes