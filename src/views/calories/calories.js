import classes from './calories.module.css'
import Spinner from '../../components/spinner/spinner';
import { useState } from 'react';
import CaloriesPlaner from '../../components/caloriesPlaner/caloriesPlaner';

const Calories = () => {
  const [calories, setCalories] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCalories = (data) => {
    setLoading(true);
    setCalories('');
    setError(null);

    fetch('http://127.0.0.1:8000/calories?'+ new URLSearchParams(data))
    .then(response => {
      if(!response.ok) {
        throw new Error('Something went wrong!');
      }
      return response.json()
    })
    .then(data => {
      setCalories(data.message);
      setLoading(false);
    })
    .catch(error => {
      setError(error.message);
      setLoading(false);
    })
  }

  return (
    <div className={classes.wrapper}>
      <h1>Calculate amount of calories needed</h1>
      <div className={classes.caloriesWrapper}>
        <CaloriesPlaner fetchCalories={fetchCalories} calories={calories} />
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