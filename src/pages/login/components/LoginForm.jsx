import "./style/login.css";
import "./style/formAnimation.css";

function LoginForm() {
  return (
    <form action="" className="loginForm">
      <h1>Log In</h1>
      <div className="control">
        <input type="email" name="LoginEmail" placeholder="Email" />
      </div>
      <div className="control">
        <input type="password" name="LoginPass" placeholder="Password" />
      </div>
      <div className="control">
        <label for="remember">remember me </label>
        <input type="checkbox" name="remember" id="remember" />
      </div>
      <div className="control">
        <input type="submit" id="logBtn" value="Login" />
      </div>
      <span className="top"></span>
      <span className="right"></span>
      <span className="bottom"></span>
      <span className="left"></span>
    </form>
  );
}

export default LoginForm;
