import classes from './diet.module.css';
import DietPlaner from '../../components/dietPlaner/dietPlaner';
import DietResponse from '../../components/dietResponse/dietResponse';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Diet = props => {
  const [dietPlan, setDietPlan] = useState('');

  const animation = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
  });

  const fetchDiet = () => {
    fetch('http://127.0.0.1:8000/diet')
    .then(response => response.json())
    .then(data => {
      setDietPlan(data.message);
      console.log('fetch complete, diet plan: ', data.message);
    })
  }

  return (
    <div className={classes.wrapper}>
      <h1>Plan your whole day meal plan</h1>
      <div className={classes.dietPlanerWrapper}>
        <DietPlaner fetchDiet={fetchDiet}/>
        {dietPlan && (<animated.div style={animation}><DietResponse dietPlan={dietPlan}/></animated.div>)}
      </div>
    </div>
  );
};

export default Diet;