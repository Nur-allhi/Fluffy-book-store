import React, { useContext } from "react";
import "./Login.css";
import { userData } from "../../App";
import {
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
      handleResponse(res, true);
    });
  };

  return (
    <div className="login">
      <h1>Login Here or create a account</h1>
      <h3>{loggedInUser.email}</h3>
      <button onClick={googleSignIn}>Google</button>
    </div>
  );
};

export default Login;
