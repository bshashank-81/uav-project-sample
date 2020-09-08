import React from "react";
import UserName from "../../molecules/userNameField";
import Password from "../../molecules/passwordField";
import { makeStyles, Typography } from "@material-ui/core";
import * as Constants from "../../../constants";
import SignInButton from "../../molecules/signInButton";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
  },
  error: {
    paddingLeft: "40px",
    color: "red",
  },
}));

const LoginForm = () => {
  const history = useHistory();
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [authenticationError, setAuthenticationError] = React.useState("");
  const classes = useStyles();

  const handleChangeInUserName = (event) => {
    event.preventDefault();
    const username = event.target.value;
    setUserName(username);
    setAuthenticationError("");
  };

  const handleChangeInPassword = (event) => {
    event.preventDefault();
    const password = event.target.value;
    setPassword(password);
    setAuthenticationError("");
  };

  const handleClick = (event) => {
    event.preventDefault();
    const loginObj = {
      username: username,
      password: password,
    };

    fetch(process.env.REACT_APP_MOCK_SERVER + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginObj),
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          response.json().then((result) => {
            console.log("result:", result);

            localStorage.setItem(
              "login-accesstoken",
              JSON.stringify({
                token: result,
              })
            );
            history.push("/home");
          });
        } else {
          setAuthenticationError(Constants.INVALID_CREDENTIALS);
        }
      })
      .catch((err) => {
        setAuthenticationError(Constants.NETWORK_ERROR);
      });
  };

  return (
    <form className={classes.form}>
      <UserName
        label={Constants.USERNAME_LABEL}
        placeholder={Constants.USERNAME_PLACEHOLDER}
        onChange={handleChangeInUserName}
      />
      <Password
        label={Constants.PASSWORD_LABEL}
        placeholder={Constants.PASSWORD_PLACEHOLDER}
        onChange={handleChangeInPassword}
      />
      <Typography className={classes.error} id="error">
        {authenticationError !== "" && authenticationError}
      </Typography>
      <SignInButton
        buttonText={Constants.SIGN_IN}
        onClick={handleClick}
      ></SignInButton>
    </form>
  );
};

export default LoginForm;
