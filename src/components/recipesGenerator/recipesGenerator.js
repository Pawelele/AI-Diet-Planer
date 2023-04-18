import classes from './recipesGenerator.module.css'
import { useState } from 'react';

const RecipesGenerator = (props) => {
  const [formData, setFormData] = useState({
    ingredients: '',
  });

  const formValuesChangeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }

  const submitHandler = (event) => {
    event.preventDefault();

    props.onSubmit(formData);
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.recipesForm}>
        <form className={classes.form} onSubmit={submitHandler}>
          <label className={classes.boldLabel}>Tell me which ingredients you have and i will make some interesting recipe for you</label>
          <div className={classes.formControl}>
            <label htmlFor="ingredients">Ingredients</label>
            <input
              type="text"
              id="ingredients"
              name="ingredients"
              className={classes.formInput}
              onChange={formValuesChangeHandler}
            />
          </div>
          <label className={classes.boldLabel}>Which type of meal you want?</label>
          <div className={classes.formControl}>
            <div className={classes.radioWrapper}>
              <div className={classes.radioInputWrapper}>
                <input type="radio" id="breakfast" name="mealType" />
                <label htmlFor="breakfast">Breakfast</label>
              </div>
              <div className={classes.radioInputWrapper}>
                <input type="radio" id="dinner" name="mealType" />
                <label htmlFor="dinner">Dinner</label>
              </div>
              <div className={classes.radioInputWrapper}>
                <input type="radio" id="dessert" name="mealType" />
                <label htmlFor="dessert">Dessert</label>
              </div>
              <div className={classes.radioInputWrapper}>
                <input type="radio" id="supper" name="mealType" />
                <label htmlFor="supper">Supper</label>
              </div>
            </div>
          </div>

          <button className={classes.button}>Generate recipe</button>
        </form>
      </div>
    </div>
  )
}

export default RecipesGenerator;