import "./header-bar.css";
import { ReactComponent as Logo } from "../../assets/revealio-logo.svg";

const headerBar = () => {
  return (
    <header className="HeaderBar">
      <div className="HeaderLogo">
        <Logo />
      </div>
      <div>reveal.io</div>
    </header>
  );
};

export default headerBar;
