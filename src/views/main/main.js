import classes from './main.module.css';
import fruitImg from '../../assets/img/fruit.png';
import AIDietLogo from '../../assets/img/logo-no-background.png'

const Main = props => {
  return (
    <div className={classes.wrapper}>
      <img src={fruitImg} alt="fruit" className={classes.fruitImg} />
      <h1 className={classes.title}>Your AI diet planer</h1>
    </div>
  );
};

export default Main;