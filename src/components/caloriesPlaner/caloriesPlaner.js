import classes from './caloriesPlaner.module.css';
import { useState } from 'react';

const CaloriesPlaner = (props) => {
  const [formValues, setFormValues] = useState({
    age: 24,
    weight: 75,
    height: 175,
  });

  const formValuesChangeHandler = (event) => {
    setFormValues({
      ...formValues,
      [event.target.id]: event.target.value,
    });
  }

  const submitHandler = (event) => {
    event.preventDefault();

    props.fetchCalories(formValues);
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.caloriesForm}>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.formControl}>
            <label htmlFor="age" className={classes.boldLabel}>Age</label>
            <input
              type="number"
              id="age"
              name='age'
              className={classes.ageInput}
              min={5}
              max={120}
              step={1}
              placeholder='24'
              value={formValues.age}
              onChange={formValuesChangeHandler}
            />
          </div>
          <div className={classes.formControl}>
            <label htmlFor="weight" className={classes.boldLabel}>Weight</label>
            <input
              type="range"
              min={20}
              max={200}
              step={1}
              id="weight"
              name='weight'
              className={classes.rangeInput}
              value={formValues.weight}
              onChange={formValuesChangeHandler}
            />
            <output>{formValues.weight} kg</output>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="height" className={classes.boldLabel}>Height</label>
            <input
              type="range"
              min={90}
              max={240}
              step={1}
              id="height"
              name='height'
              className={classes.rangeInput}
              value={formValues.height}
              onChange={formValuesChangeHandler}
            />
            <output>{formValues.height} cm</output>
          </div>
          <button className={classes.button}>Calculate</button>
        </form>
        {props.calories && <p className={classes.caloriesResponse}>You should eat around <span className={classes.caloriesNumber}>{props.calories} kcal</span></p>}
      </div>
    </div>
  );
}

export default CaloriesPlaner;