import "./Login.css"
import Button from "../UI/Button/Button";

const Login = () => {
  return (
    <section className="login">
      <div>
        <label htmlFor="">Enter Email:</label>
        <input type="email" />
      </div>
      <div>
        <label htmlFor="">Enter Password:</label>
        <input type="password" />
      </div>
      <div>
        <Button type="submit" className="btn">Log In</Button>
      </div>
    </section>
  );
};

export default Login;
