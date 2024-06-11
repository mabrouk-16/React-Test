import LoginForm from "./LoginForm"
import LoginText from "./LoginText"
import './style/login.css'
function Login() {
  return (
    <div class="login-wrapper" id="login-wrapper">
        <LoginText/> 
        <LoginForm/>
</div>
  )
}

export default Login
