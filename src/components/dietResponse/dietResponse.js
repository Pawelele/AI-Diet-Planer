import classes from './dietResponse.module.css'
import { saveDataToStore } from '../../utils/utils';
import { useState } from 'react';

const DietResponse = (props) => {
  const [saved, setSaved] = useState(false);

  const saveHandler = () => {
    setSaved(true);
    saveDataToStore('diets','diet', props.dietPlan);
  }

  const buttonClasses = `${classes.button} ${saved ? classes.disabled : ''}`

  return (
    <div className={classes.wrapper}>
      <h1>Your plan:</h1>
      <div className={classes.response}>
        {props.dietPlan ? props.dietPlan : 'No data' }
      </div>


      <button onClick={saveHandler} className={buttonClasses}>Save diet</button>
      {saved && <p className={classes.success}>Diet saved sucessfully</p>}
    </div>
  )
}

export default DietResponse;