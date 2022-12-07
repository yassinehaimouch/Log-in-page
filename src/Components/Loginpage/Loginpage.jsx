import "./loginpage.css";
import Leftside from "./Leftside/Leftside";
import Rightside from "./Rightside/Rightside";

const Loginpage = () => {
  return (
    <div className="login-page__container">
      <Leftside />
      <Rightside />
    </div>
  );
};

export default Loginpage;
