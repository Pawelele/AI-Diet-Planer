import classes from './savedItems.module.css';
import { useEffect, useState } from 'react';

const SavedItems = () => {
  const [recipes, setRecipes] = useState([]);
  const [diets, setDiets] = useState([]);

  useEffect(() => {
    const recipesData = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(recipesData);

    const dietsData = JSON.parse(localStorage.getItem('diets')) || [];
    setDiets(dietsData);

    return () => {
      console.log('cleanup fired');
      setRecipes([]);
      setDiets([]);
    }
  }, []);

  const savedRecipesTable = (
    <table className={classes.savedItemsTab}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {recipes.map(recipe => (
          <tr key={recipe.description}>
            <td>{recipe.name}</td>
            <td>{recipe.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const savedDietsTable = (
    <table className={classes.savedItemsTab}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {diets.map(diet => (
          <tr key={diet.description}>
            <td>{diet.name}</td>
            <td>{diet.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );


  return (
    <>
      <div className={classes.wrapper}>
        <h1>Saved Recipes</h1>
        {recipes.length > 0 ? savedRecipesTable : <p>Your list is empty</p>}
      </div>
      <div className={classes.wrapper}>
        <h1>Saved Diets</h1>
        {diets.length > 0 ? savedDietsTable : <p>Your list is empty</p>}
      </div>
    </>
  )
}

export default SavedItems;