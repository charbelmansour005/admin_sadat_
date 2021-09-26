import React, { useState, useEffect } from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { useHistory } from "react-router-dom";
import "../../styles/Login.css";
import axios from "axios";
import { Cookies } from 'react-cookie';
const Login = () => {
  const [companyID, setCompanyID] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [first, setFirst] = useState(true);
  const [wrongInfo, setWrongInfo] = useState(false);
  axios.defaults.withCredentials = true;
  let history = useHistory();
  const signinHandler = (event) => {
    event.preventDefault();
    if (companyID === "1" && username === "m" && password === "m") {
      //checkSession()
      history.push("/Home");
    } else {
      document.getElementById("wrong").style.visibility = "visible";
      setWrongInfo((prev) => (prev === false ? true : prev));
    }
  };
  const mountedStyle = { animation: "inAnimation 500ms ease-in" };
  const unmountedStyle = {
    animation: "outAnimation 500ms ease-out",
    animationFillMode: "forwards",
  };
  const forgotHandler = () => {
    setVisible((prev) => !prev);
    setFirst((prev) => (prev ? false : false));
  };
  const resetPassword = () => { };




  let checkSession = () => {
    const cookie = new Cookies();
    let emp = {
      "username": "charbel",
      "password": "charbel"
    }
    axios.post("http://localhost:3001/api/Login", emp).then((response) => {
      console.log(response)
      var id = cookie.get('connect.sid')
      if (id !== null) {
        console.log(id);
        console.log("user login successfull")
      }
      else {
        console.log("user failed")
      }
    })
  }


  useEffect(() => {
    // const cookie = new Cookies();
    // console.log(cookie.get('connect.sid'));
    // let emp = {
    //   "username": "charbel",
    //   "password": "charbel"
    // }
    // axios.post("http://localhost:3001/api/Login", emp).then((response) => {
    //   console.log(response)
    // })
    // axios.get("http://localhost:3001/api/Login").then((response) => {
    //   if (response.data.loggedIn === true) {
    //     console.log(response)

    //   }
    // })

  }, []);

  return (
    <div className="login-body">
      <div className="login">
        <AccountBoxIcon
          style={{
            height: "156px",
            width: "156px",
            alignSelf: "center",
            color: "rgba(0,0,0,0.7)",
          }}
        />
        <span
          id="wrong"
          className="wrong"
          style={wrongInfo ? mountedStyle : unmountedStyle}
        >
          Company ID, username or password incorrect
        </span>
        <form type="submit" className="login" onSubmit={signinHandler}>
          <input
            onChange={(event) => {
              setCompanyID(event.target.value);
            }}
            placeholder="Company ID"
            type="number"
            className="username"
            autoFocus="true"
          />
          <input
            required
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            placeholder="Username"
            type="text"
            className="username"
          />
          <input
            required
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            placeholder="Password"
            type="password"
            className="username"
          />
          <input type="submit" value="Sign In" className="submit-button" />
          {!visible ? (
            <span className="forgot" onClick={forgotHandler}>
              Forgot Password?
            </span>
          ) : null}
        </form>
        {first ? null : (
          <form
            type="submit"
            onSubmit={resetPassword}
            className="login"
            style={visible ? mountedStyle : unmountedStyle}
          >
            <input
              required
              onChange={(event) => {
                setCompanyID(event.target.value);
              }}
              placeholder="Enter your email"
              type="email"
              className="username"
              l="1"
            />
            <input
              type="submit"
              value="Reset Password"
              className="submit-button"
              l="1"
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
