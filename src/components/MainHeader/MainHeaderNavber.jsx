import "./MainHeaderNavber.css"
import Button from "../UI/Button/Button";

const MainHeaderNavber = (props) => {
  return (
    <ul>
      <li>Home</li>
      <li>Service</li>
      <li>
        <Button type="submit" onClick={props.isLogout}>Log Out</Button>
      </li>
    </ul>
  );
};

export default MainHeaderNavber