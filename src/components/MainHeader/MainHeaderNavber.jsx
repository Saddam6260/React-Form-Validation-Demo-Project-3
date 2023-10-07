import "./MainHeaderNavber.css"
import Button from "../UI/Button/Button";

const MainHeaderNavber = () => {
  return (
    <ul>
      <li>Home</li>
      <li>Service</li>
      <li>
        <Button type="submit">Log Out</Button>
      </li>
    </ul>
  );
};

export default MainHeaderNavber