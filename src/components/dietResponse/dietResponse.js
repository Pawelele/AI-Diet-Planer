import classes from './dietResponse.module.css'

const DietResponse = (props) => {


  return (
    <div className={classes.wrapper}>
      <h1>Your plan:</h1>
      <p>{props.dietPlan ? props.dietPlan : 'No data' }</p>
    </div>
  )
}

export default DietResponse;