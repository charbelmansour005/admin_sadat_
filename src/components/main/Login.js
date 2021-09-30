import React, { useState, useEffect } from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { useHistory } from "react-router-dom";
import "../../styles/Login.css";
import axios from "axios";
import { Cookies } from 'react-cookie';
import User from "../../models/User";
import { useDispatch, useSelector } from "react-redux";
import { saveUserInfo, getAllGroups, getAllGroupItems } from "../../redux/actions";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";


const Login = () => {
  const [companyID, setCompanyID] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [first, setFirst] = useState(true);
  const [wrongInfo, setWrongInfo] = useState(false);
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false
  })
  const dispatch = useDispatch();
  axios.defaults.withCredentials = true;
  const saveUser = (user) => dispatch(saveUserInfo(user));
  const getGroups = (item) => dispatch(getAllGroups(item));
  const getItems = (item) => dispatch(getAllGroupItems(item));
  const { userInfo } = useSelector(
    (state) => state.postReducer
  );
  var db = require('../../global/globalfunctions')



  let history = useHistory();
  const signinHandler = (event) => {
    event.preventDefault();
    getLoginInfo()
    resetForm()

  };
  const mountedStyle = { animation: "inAnimation 500ms ease-in" };
  const unmountedStyle = {
    animation: "outAnimation 500ms ease-out",
    animationFillMode: "forwards",
  };
  const forgotHandler = () => {
    setVisible((prev) => !prev);
    setFirst((prev) => (prev ? false : false));
    console.log(userInfo)
  };
  const resetPassword = () => { };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  let getLoginInfo = () => {
    const apiUrl = "http://localhost:3002/api/DigitalMenu/getUserInfo"
    var user = Object.create(User)
    user.username = username
    user.userpassword = values.password
    fetch(apiUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    }).then((res) => res.json()).then((resJson) => {

      if (resJson.Status === "Success") {
        saveUser(resJson.data.Users[0]);
        db.fetchAllGroups(resJson.data.Users[0].userid)
        db.fetchAllItems(resJson.data.Users[0].userid)
        history.push("/Home")
      }
      else {
        alert(resJson.message)
      }
    })

  }

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
  let resetForm = () => {
    document.getElementById('login-form').reset();
  }
  useEffect(() => { }, []);

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
        <form type="submit" id="login-form" className="login" onSubmit={signinHandler}>
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
          <div >
            <input
              required
              // onChange={(event) => {
              //   setPassword(event.target.value);
              // }}
              onChange={handlePasswordChange("password")}

              placeholder="Password"
              className="password"
              type={values.showPassword ? "text" : "password"}
            />
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </div>

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
