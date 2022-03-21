import "./header-bar.css";
import { ReactComponent as Logo } from "../../assets/revealio-logo.svg";

const headerBar = () => {
  console.log("header rendered");
  return (
    <header className="HeaderBar">
      <div className="HeaderLogo">
        <Logo fill="#eeeeee" />
      </div>
      <div className="HeaderText">reveal.io</div>
    </header>
  );
};

export default headerBar;
