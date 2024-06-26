import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.scss";
import wallpaper from "../../icons/wallpaper.svg";
import logo from "../../icons/logo.svg";

function Login() {
  const [userData, setUserData] = useState<{ email: string; password: string }>(
    { email: "", password: "" }
  );
  const navigate = useNavigate();

  const login = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    localStorage.setItem("lendsqrUserEmail", userData.email);
    const email = await localStorage.getItem("lendsqrUserEmail");
    if (email === userData.email) {
      navigate("/dashboard")
    };
  };

  const onUserDataChange = (e: { target: { name: string; value: string } }) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const userLoggedIn = localStorage.getItem("lendsqrUserEmail");
  
  if (userLoggedIn) return <Navigate replace to="/dashboard" />;

  return (
    <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      <div className="landing">
        <div className="wallpaper">
          <img src={wallpaper} alt="wallpaper" />
        </div>
      </div>
      <form className="form" onSubmit={login}>
        <div>
          <h1>Welcome!</h1>
          <span>Enter details to login.</span>
          <input
            onChange={onUserDataChange}
            name="email"
            placeholder="Email"
            type="text"
          />
          <input
            onChange={onUserDataChange}
            placeholder="Password"
            name="password"
            type="password"
          />
          <button type="button" className="forgot">
            Forgot PASSWORD?
          </button>
          <button
            type="submit"
            disabled={!userData.email || !userData.password}
          >
            LOG IN
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
