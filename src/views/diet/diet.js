import classes from './diet.module.css';
import DietPlaner from '../../components/dietPlaner/dietPlaner';
import DietResponse from '../../components/dietResponse/dietResponse';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Spinner from '../../components/spinner/spinner';

const Diet = props => {
  const [dietPlan, setDietPlan] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const animation = useSpring({
    from: { opacity: 0, transform: 'scale(0.6)' },
    to: { opacity: 1, transform: 'scale(1)' },
  });

  const fetchDiet = () => {
    setLoading(true);
    setDietPlan('');
    setError(null);

    fetch('http://127.0.0.1:8000/diet')
    .then(response => {
      if(!response.ok) {
        throw new Error('Something went wrong!');
      }
      return response.json()
    })
    .then(data => {
      setDietPlan(data.message);
      setLoading(false);
    })
    .catch(error => {
      setError(error.message);
      setLoading(false);
    })
  }

  return (
    <div className={classes.wrapper}>
      <h1>Plan your whole day meal plan</h1>
      <div className={classes.dietPlanerWrapper}>
        <DietPlaner fetchDiet={fetchDiet}/>
        {dietPlan &&
        (<animated.div style={animation}>
          <DietResponse dietPlan={dietPlan}/>
        </animated.div>)}
      </div>
      <Spinner
        loading={loading}
        size={60}
        color="#ff7a22"
      />
      {error && <p className={classes.error}>{error}</p>}
    </div>
  );
};

export default Diet;