import React, { useState } from "react";
import LoginFormContext from "./LoginFormContext.js";

const LoginFormContextProvider = ({ children }) => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [loginBtnText, setLoginBtnText] = useState("Login");
    return (
        <LoginFormContext.Provider value={{ showLoginForm, setShowLoginForm, loginBtnText, setLoginBtnText }}>
            {children}
        </LoginFormContext.Provider>
    );
};

export default LoginFormContextProvider;