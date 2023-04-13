import classes from './header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <h1>AI Diet Planer</h1>
      </div>
      <div className={classes.nav}>
        <nav>
          <NavLink
            exact
            to="/"
            className={({isActive}) =>
            isActive ? classes.active : classes.link}
          >
            Main Page
          </NavLink>
          <NavLink
            to="/diet"
            className={({isActive}) =>
            isActive ? classes.active : classes.link}
          >
            Diet Generator
          </NavLink>
          <NavLink
            to="/caloriesCalculator"
            className={({isActive}) =>
            isActive ? classes.active : classes.link}
          >
            Calories Calculator
          </NavLink>
          <NavLink
            to="/recipes"
            className={({isActive}) =>
            isActive ? classes.active : classes.link}
          >
            Recipes
          </NavLink>
          <NavLink className={classes.link}>Account</NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Header;