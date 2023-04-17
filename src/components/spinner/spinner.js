import SpinnerComponent from "react-spinners/HashLoader";
import classes from './spinner.module.css'

const Spinner = ({ loading, size = 60, color = "#ff7a22" }) => {

  return (
    <div className={classes.wrapper}>
      <SpinnerComponent
        size={size}
        color={color}
        loading={loading}
      />
    </div>
  );
}

export default Spinner;