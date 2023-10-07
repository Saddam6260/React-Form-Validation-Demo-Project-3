import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${styles.button} ${styles.btn}`} disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
