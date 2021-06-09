import React, { useContext } from "react";
import "./Login.css";
import googleImg from "./google.png";
import { userData } from "../../App";
import {
  handleAuthToken,
  handleGoogleSignIn,
  initializeAppLoginFrameWork,
} from "./LoginManager";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  initializeAppLoginFrameWork();

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser, setLoggedInUser] = useContext(userData);

  const handleResponse = (res, redirect) => {
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      storeAuthToken();
      handleResponse(res, true);
    });
  };
  const storeAuthToken = () => {
    handleAuthToken().then((res) => {
      sessionStorage.setItem("idToken", res);
    });
  };

  return (
    <div className="login">
      <h1>Login Here or create a account</h1>
      <h3>{loggedInUser.email}</h3>
      <button onClick={googleSignIn}>
        <img src={googleImg} alt="" /> Continue with google
      </button>
    </div>
  );
};

export default Login;
