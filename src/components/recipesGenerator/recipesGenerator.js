import classes from './recipesGenerator.module.css'
import { useState } from 'react';

const RecipesGenerator = (props) => {
  const [formDataTouched, setFormDataTouched] = useState({
    ingredients: false,
    type: false
  });

  const [formDataValid, setFormDataValid] = useState({
    ingredients: false,
    type: false
  });

  const [formData, setFormData] = useState({
    ingredients: '',
    type: ''
  });

  // const isIngredientsValid = formDataTouched.ingredients && !formDataValid.ingredients;

  const formValuesChangeHandler = (event) => {

    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }

  const formRadioChangeHandler = (event) => {
    setFormData({
      ...formData,
      type: event.target.value,
    });
  }

  const onTouchedHandler = (event) => {
    setFormDataTouched({
      ...formDataTouched,
      [event.target.id]: true,
    });
  }

  const submitHandler = (event) => {
    event.preventDefault();

    // if(!isIngredientsValid) {
    //   return;
    // }
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
              onFocus={onTouchedHandler}
            />
            {/* {!isIngredientsValid && <p className={classes.error}>Please enter valid value</p>} */}
          </div>
          <label className={classes.boldLabel}>Which type of meal you want?</label>
          <div className={classes.formControl}>
            <div className={classes.radioWrapper}>
              <div className={classes.radioInputWrapper}>
                <input type="radio" id="breakfast" name="mealType" value="breakfast" onChange={formRadioChangeHandler}/>
                <label htmlFor="breakfast">Breakfast</label>
              </div>
              <div className={classes.radioInputWrapper}>
                <input type="radio" id="dinner" name="mealType" value="dinner" onChange={formRadioChangeHandler}/>
                <label htmlFor="dinner">Dinner</label>
              </div>
              <div className={classes.radioInputWrapper}>
                <input type="radio" id="dessert" name="mealType" value="dessert" onChange={formRadioChangeHandler}/>
                <label htmlFor="dessert">Dessert</label>
              </div>
              <div className={classes.radioInputWrapper}>
                <input type="radio" id="supper" name="mealType" value="supper" onChange={formRadioChangeHandler}/>
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