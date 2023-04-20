import classes from './dietResponse.module.css'
import { saveDataToStore } from '../../utils/utils';

const DietResponse = (props) => {

  const saveHandler = () => {
    saveDataToStore('diets','diet', props.dietPlan);
  }


  return (
    <div className={classes.wrapper}>
      <h1>Your plan:</h1>
      <p>{props.dietPlan ? props.dietPlan : 'No data' }</p>

      <button onClick={saveHandler} className={classes.button}>Save diet</button>
    </div>
  )
}

export default DietResponse;