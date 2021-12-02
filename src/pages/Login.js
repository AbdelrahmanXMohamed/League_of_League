import React, {
  useRef,
  // useState,
  useEffect
} from "react";
// import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Logo from "../resource/Logo.png";
import { Link, useHistory } from "react-router-dom";


const Login = () => {
  let history = useHistory();
  history.location.pathname.replace("/", "")
  const username = useRef("");
  const password = useRef("");
  const Login = useRef();
  // const [faded, setfaded] = useState(false);
  useEffect(() => {
    return () => {
      console.log("unmount")
      console.log(Login)
    }
  }, [])
  const handleLogin = (username, password) => {
    console.log("username : " + username);
    console.log("password : " + password);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const usernameData = username.current.value;
    const passwordData = password.current.value;
    handleLogin(usernameData, passwordData);
  };
  // const redirect = (e) => {
  //   setfaded(true);
  //   console.log(e.target.id);
  //   setTimeout(() => history.push(`/${e.target.id}`), 500);
  // };
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="Sign">
        <Link ref={Login} className={history.location.pathname.replace("/", "") === "login" ? "login active" : "login"} to="/login">
          Login
        </Link>
        <Link className={history.location.pathname.replace("/", "") === "register" ? "register active" : "register"} to="/register">
          Register
        </Link>
      </div>
      <input type="text" ref={username} name="username" placeholder="Username" />
      <input type="password" ref={password} name="password" placeholder="Password" />
      <div className="last">
        <div className="remember_me">
          <input type="checkbox" id="Remember_me" />
          <label> Remember me</label>
        </div>
        <Link className="right" to="/forget_password">Forget Password ?</Link>
      </div>
      <input type="submit" value="Login" />

      <p>Not a memeber <Link to="/register" style={{ fontSize: "inherit" }}>Register Now ?</Link></p>
    </form>
  );
};

export default Login;