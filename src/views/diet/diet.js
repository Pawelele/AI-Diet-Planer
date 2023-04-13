import classes from './diet.module.css';
import DietPlaner from '../../components/dietPlaner/dietPlaner';
import DietResponse from '../../components/dietResponse/dietResponse';

const Diet = props => {
  return (
    <div className={classes.wrapper}>
      <h1>Plan your whole day meal plan</h1>
      <div className={classes.dietPlanerWrapper}>
        <DietPlaner />
        <DietResponse />
      </div>
    </div>
  );
};

export default Diet;