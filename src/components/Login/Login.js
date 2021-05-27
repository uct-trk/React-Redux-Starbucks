import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import ReportProblemRoundedIcon from "@material-ui/icons/ReportProblemRounded";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import CloseIcon from "@material-ui/icons/Close";
import FormSubmit from "../Buttons/FormSubmit/FormSubmit";
import FooterSecondary from "../Footer/FooterSecondary/FooterSecondary";
import { auth } from "../../Firebase/firebase";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";

const Login = () => {
  const { handleSubmit, register, watch, errors } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();

  // firebase auth
  const onSubmit = ({ email, password }) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="header__login">
        <Link to="/">
          <img
            src="https://marka-logo.com/wp-content/uploads/2020/09/Starbucks-Logo.png"
            alt="logo_login"
          />
        </Link>
      </div>
      <div className="top__wrap">
        <h3 className="login__header">Sign in or create an account</h3>
        <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="loginScreen__inputContainer">
            <TextField
              name="email"
              label="Email Address"
              type="email"
              InputLabelProps={{
                style: { color: "rgba(0,0,0,.56)"},
              }}
              InputProps={{ style: { fontWeight: "800" } }}
              className="loginScreen__input"
              inputRef={register({ required: true })}
            />

            {errors.email && (
              <div className="loginScreen__error">
                <CloseIcon fontSize="small" />
                <span>Enter an email.</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="loginScreen__reportIcon"
                />
              </div>
            )}
          </div>

          <div className="loginScreen__inputContainer2">
            <TextField
              name="password"
              type={passwordShown ? "text" : "password"}
              InputLabelProps={{ style: { color: "rgba(0,0,0, .56)" } }}
              InputProps={{ style: { fontWeight: "800" } }}
              label="Password"
              className="loginScreen__input"
              inputRef={register({ required: true })}
            />

            {/*if you want to see password click the icon also you can hide after */}
            {passwordShown ? (
              <VisibilityOutlinedIcon
                onClick={() => setPasswordShown(!passwordShown)}
                className="loginScreen__visibilityIcon"
              />
            ) : (
              <VisibilityOffOutlinedIcon
                onClick={() => setPasswordShown(!passwordShown)}
                className="loginScreen__visibilityIcon"
              />
            )}
            {errors.password && (
              <div className="loginScreen__error">
                <CloseIcon fontSize="small" />
                <span>Enter an password.</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="loginScreen__reportIcon"
                />
              </div>
            )}
          </div>
          <div className="wrap_box">
              <input type="checkbox"></input>
                <p>Keep me signed in.</p> <Link> Details</Link>
          </div>
          <div className="loginScreen__resetLinks">
          <div><Link>Forgot your username?</Link></div>
            <div className="div2"><Link>Forgot your password?</Link></div>
          </div>
          <FormSubmit name="Sign in" type="submit" />
        </form>
        
        <div className="loginScreen__rewards">
          <h4>JOIN STARBUCKS® REWARDS</h4>
          <div>
            Join Starbucks® Rewards to earn free food and drinks, get free
            refills, pay and order with your phone, and more.
          </div>
          <Link to="/account/signup"><button>Join now</button></Link>
        </div>
      
        <FooterSecondary paddingLeft={30} flexDirection="column" />
      </div>
    </div>
  );
};

export default Login;
