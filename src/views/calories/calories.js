import classes from './calories.module.css'
import Spinner from '../../components/spinner/spinner';
import { useState } from 'react';
import CaloriesPlaner from '../../components/caloriesPlaner/caloriesPlaner';

const Calories = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className={classes.wrapper}>
      <h1>Calculate amount of calories needed</h1>
      <div className={classes.caloriesWrapper}>
        <CaloriesPlaner />
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

export default Calories;