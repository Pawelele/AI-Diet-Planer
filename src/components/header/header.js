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
            to="/"
            exact={true}
            className={({isActive}) =>
            isActive ? classes.active : classes.link}
          >
            Strona Główna
          </NavLink>
          <NavLink
            to="/diet"
            exact
            className={({isActive}) =>
            isActive ? classes.active : classes.link}
          >
            Dieta
          </NavLink>
          <NavLink
            to="/recipes"
            exact
            className={({isActive}) =>
            isActive ? classes.active : classes.link}
          >
            Przepisy
          </NavLink>
          <NavLink className={classes.link}>Konto</NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Header;