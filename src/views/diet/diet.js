import classes from './diet.module.css';
import DietPlaner from '../../components/dietPlaner/dietPlaner';

const Diet = props => {
  return (
    <div className={classes.wrapper}>
      <h1>Plan your whole day meal plan</h1>
      <DietPlaner />
    </div>
  );
};

export default Diet;