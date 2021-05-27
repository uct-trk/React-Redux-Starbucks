import React from "react";
import { Link } from "react-router-dom";
import FooterSecondary from "../Footer/FooterSecondary/FooterSecondary";
import SignupForm from "../SignupForm/SignupForm";
import "./signUp.css";

const SignUp = () => {
  return (
    <div className="signupScreen">
      <div className="signupScreen__header">
        <Link to="/">
          <img
            src="https://marka-logo.com/wp-content/uploads/2020/09/Starbucks-Logo.png"
            alt="logo"
          />
        </Link>
      </div>
      <h1 className="signupScreen__heading">Create an account</h1>
      <div className="signupScreen__rewards">
        <h4>STARBUCKS® REWARDS</h4>
        <p>
          Join Starbucks Rewards to earn Stars for free food and drinks, any way
          you pay. Get access to mobile ordering, a birthday Reward, and
          <Link> more</Link>. 
        </p>
        <SignupForm/>
        <FooterSecondary alignItems="center" flexDirection="column" />
      </div>
    </div>
  );
};

export default SignUp;
