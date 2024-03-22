import React from 'react';
import classes from "./Login.module.css";
import AuthForm from "../ui/forms/AuthForm";
import AuthImage from "../../assets/images/AuthImage.gif"

const Login = () => {
    return (
        <div className={classes.LoginFormWrapper}>
            <div className={classes.AuthImage} style={{backgroundImage: `url(${AuthImage})`}}></div>
            <div className={classes.LoginForm}>
                <AuthForm title={"Вход"}/>
            </div>
        </div>
    );
};

export default Login;
