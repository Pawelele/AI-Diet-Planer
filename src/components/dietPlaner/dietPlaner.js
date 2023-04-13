import classes from './dietPlaner.module.css';
import { useState } from 'react';

const DietPlaner = props => {
  const [formValue, setFormValue] = useState({
    calories: 2000,
    vegan: false,
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

  return (
    <div className={classes.wrapper}>
      <h2>Enter data below:</h2>
      <form onSubmit={submitHandler}>
        <div className={classes.formControl}>
          <label htmlFor="calories">How many calories you want to eat?</label>
          <div className={classes.kcalInputWrapper}>
            <input type="number" id="calories" step={50} min={1000} max={7000} className={classes.kcalInput} value={formValue.calories} onChange={caloriesChangeHandler}/>
            <span>kcal</span>
          </div>
        </div>
        <div className={classes.formControl}>
          <label htmlFor="vegan">Are you vegan</label>
          <div className={classes.radioInputWrapper}>
            <input type="radio" id="vegan" name='vegan' value='true' onChange={veganChangeHandler}/>
            <label htmlFor="vegan">Yes</label>
          </div>
          <div className={classes.radioInputWrapper}>
            <input type="radio" id="vegan" name='vegan'value='false' onChange={veganChangeHandler} defaultChecked/>
            <label htmlFor="vegan">No</label>
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