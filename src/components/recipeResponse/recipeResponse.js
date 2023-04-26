import classes from './recipeResponse.module.css'
import { saveDataToStore } from '../../utils/utils';
import { useState } from 'react';

const RecipeResponse = (props) => {
  const [saved, setSaved] = useState(false);

  const saveHandler = () => {
    setSaved(true);
    saveDataToStore('recipes','recipe', props.recipe);
  }

  const buttonClasses = `${classes.button} ${saved ? classes.disabled : ''}`

  return (
    <div className={classes.wrapper}>
      <h1>Your recipe</h1>
      <p>{props.recipe ? props.recipe : 'No data' }</p>

      <button onClick={saveHandler} className={buttonClasses} disabled={saved}>Save recipe</button>
      {saved && <p className={classes.success}>Recipe saved succesfully</p>}
    </div>
  )

}

export default RecipeResponse;