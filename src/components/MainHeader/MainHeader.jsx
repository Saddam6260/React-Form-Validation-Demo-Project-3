import "./MainHeader.css";
import MainHeaderNavber from "./MainHeaderNavber";

const MainHeader = (props) => {
  return (
    <header>
        <h2>Form Validation</h2>
        {props.isLogin && <MainHeaderNavber isLogout={props.isLogOutHandler}/>}
    </header>
  );
};

export default MainHeader;
