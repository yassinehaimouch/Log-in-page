import "./leftside.css";
import { FcGoogle } from "react-icons/fc";

const Leftside = () => {
  return (
    <div className="left-side">
      <div className="logo">Untitled</div>

      <div className="login_container">
        <div className="form__container">
          <h1>Welcome back</h1>
          <h3>Welcome back! Please enter your details.</h3>
          <form action="">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="email__input"
              id="email"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="password__input"
              id="password"
              required
            />
            <div className="checkbox__container">
              <div className="checkbox-items">
                <input type="checkbox" className="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Remember for 30 days</label>
              </div>
              <a href="https://gmail.com" rel="noreferrer" target="_blank">
                Forgot password
              </a>
            </div>
            <button className="signin__button">Sign in</button>
          </form>
          <button className="signin-google__button">
            <FcGoogle className="google-icon" />
            Sign in with Google
          </button>
        </div>

        <dir className="sign-up">
          <h3>Don't have an account?</h3>
          <a href="https://gmail.com" rel="noreferrer" target="_blank">
            Sign up
          </a>
        </dir>
      </div>

      <footer>&copy; 2022 All Rights Reserved.</footer>
    </div>
  );
};

export default Leftside;
