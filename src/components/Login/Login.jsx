import { useState } from "react";

import "./Login.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    setFormIsValid(
      event.target.value.includes("@") && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    setFormIsValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.isLogin(enteredEmail, enteredPassword);

    console.log(formIsValid, emailIsValid, passwordIsValid);
  };

  return (
    <section className="login">
      <form action="" onSubmit={onSubmitHandler} className="form">
        <div className={`control ${emailIsValid === false ? 'invalid' : ''}`}>
          <label htmlFor="useremail">Enter Email:</label>
          <input
            type="email"
            id="useremail"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={`control ${passwordIsValid === false ? "invalid" : ''}`}>
          <label htmlFor="userpassword">Enter Password:</label>
          <input
            type="password"
            id="userpassword"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div>
          <Button type="submit" className="btn" disabled={!formIsValid}>
            Log In
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Login;
