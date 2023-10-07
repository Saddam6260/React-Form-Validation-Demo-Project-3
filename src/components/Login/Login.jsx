import { useState } from "react";

import "./Login.css";
import Button from "../UI/Button/Button";

const Login = () => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState('');

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Hellow man");
  };

  return (
    <section className="login">
      <form action="" onSubmit={onSubmitHandler} className="form">
        <div>
          <label htmlFor="useremail">Enter Email:</label>
          <input type="email" id="useremail" value={enteredEmail} onChange={emailChangeHandler} />
        </div>
        <div>
          <label htmlFor="userpassword">Enter Password:</label>
          <input type="password" id="userpassword" value={enteredPassword} onChange={passwordChangeHandler} />
        </div>
        <div>
          <Button type="submit" className="btn">
            Log In
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Login;
