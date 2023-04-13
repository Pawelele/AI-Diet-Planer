import classes from './dietPlaner.module.css';
import { useState } from 'react';

const DietPlaner = props => {
  const [formValue, setFormValue] = useState({
    calories: 2000,
    vegan: false,
    breakfast: false,
    lunch: false,
    dinner: false,
    snack: false,
    supper: false,
  });
  const [isSubmited, setIsSubmited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    setIsSubmited(true);

    const dietData = formValue;
    console.log(dietData);
  }

  const caloriesChangeHandler = (event) => {
    setFormValue({
      ...formValue,
      calories: event.target.value,
    });
  }

  const veganChangeHandler = (event) => {
    setFormValue({
      ...formValue,
      vegan: event.target.value,
    });
  }

  const chackboxChangeHandler = (event) => {
    const { name, checked } = event.target;
    setFormValue({
      ...formValue,
      [name]: checked
    });
  }

  return (
    <div className={classes.wrapper}>
      <h2>Enter data below:</h2>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.formControl}>
          <label htmlFor="calories">How many calories you want to eat?</label>
          <div className={classes.kcalInputWrapper}>
            <input type="number" id="calories" step={50} min={1000} max={7000} className={classes.kcalInput} value={formValue.calories} onChange={caloriesChangeHandler}/>
            <span>kcal</span>
          </div>
        </div>
        <div className={classes.formControl}>
          <label htmlFor="vegan">Are you vegan?</label>
          <div className={classes.radioInputWrapper}>
            <input type="radio" id="veganYes" name='vegan' value={true} onChange={veganChangeHandler}/>
            <label htmlFor="veganYes">Yes</label>
          </div>
          <div className={classes.radioInputWrapper}>
            <input type="radio" id="veganNo" name='vegan'value={false} onChange={veganChangeHandler} defaultChecked/>
            <label htmlFor="veganNo">No</label>
          </div>
        </div>
        <label>How many dishes you want?</label>
        <div className={classes.checkboxWrapper}>
          <div className={classes.radioInputWrapper}>
            <input type="checkbox" id="breakfast" name="breakfast" checked={formValue.breakfast} onChange={chackboxChangeHandler}/>
            <label htmlFor="breakfast">Breakfast</label>
          </div>
          <div className={classes.radioInputWrapper}>
            <input type="checkbox" id="lunch" name="lunch" checked={formValue.lunch} onChange={chackboxChangeHandler}/>
            <label htmlFor="lunch">Lunch</label>
          </div>
          <div className={classes.radioInputWrapper}>
            <input type="checkbox" id="dinner" name="dinner" checked={formValue.dinner} onChange={chackboxChangeHandler}/>
            <label htmlFor="dinner">Dinner</label>
          </div>
          <div className={classes.radioInputWrapper}>
            <input type="checkbox" id="snack" name="snack" checked={formValue.snack} onChange={chackboxChangeHandler}/>
            <label htmlFor="snack">Snack</label>
          </div>
          <div className={classes.radioInputWrapper}>
            <input type="checkbox" id="supper" name="supper" checked={formValue.supper} onChange={chackboxChangeHandler}/>
            <label htmlFor="supper">Supper</label>
          </div>
        </div>

        <div className={classes.formControl}>
          <button className={classes.button}>Generate diet</button>
        </div>
      </form>
    </div>
  );
};

export default DietPlaner;