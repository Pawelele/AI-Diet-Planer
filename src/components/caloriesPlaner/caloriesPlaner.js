import classes from './caloriesPlaner.module.css';

const CaloriesPlaner = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.caloriesForm}>
        <form className={classes.form}>
          <div className={classes.formControl}>
            <label htmlFor="age" className={classes.boldLabel}>Age</label>
            <input type="number" id="age" className={classes.ageInput} min={5} max={120} step={1} placeholder='24'/>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="weight" className={classes.boldLabel}>Weight</label>
            <input type="range" min={20} max={200} step={1} id="weight" className={classes.formInput}/>
            <output>24 kg</output>
          </div>
          <div className={classes.formControl}>
            <label htmlFor="height" className={classes.boldLabel}>Height</label>
            <input type="range" min={90} max={240} step={1} id="height" className={classes.formInput}/>
            <output>175 cm</output>
          </div>
          <button className={classes.button}>Calculate</button>
        </form>
      </div>
    </div>
  );
}

export default CaloriesPlaner;