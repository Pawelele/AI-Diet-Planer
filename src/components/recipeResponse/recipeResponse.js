import classes from './recipeResponse.module.css'
import { saveDataToStore } from '../../utils/utils';

const RecipeResponse = (props) => {
  const saveHandler = () => {
    saveDataToStore('recipes','recipe', props.recipe);
  }

  return (
    <div className={classes.wrapper}>
      <h1>Your recipe</h1>
      <p>{props.recipe ? props.recipe : 'No data' }</p>

      <button onClick={saveHandler} className={classes.button}>Save recipe</button>
    </div>
  )

}

export default RecipeResponse;