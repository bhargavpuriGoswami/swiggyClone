import React, { useEffect } from "react";
import work_in_progress from "../public/img/work-in-progress.png";
import { useLocation } from 'react-router-dom';
import Login from "./Login.component.js";
import LoginFormContext from "./Contexts/LoginFormContext.js";
import { useContext } from "react";

const About = () => {
    const {showLoginForm, setShowLoginForm} = useContext(LoginFormContext);
    console.log(showLoginForm)
    useEffect(() => {
        
    },[showLoginForm])
    const page=()=>{
        return(
            <div className="flex justify-center items-center h-full">
            <img className="w-1/6" src={work_in_progress} alt="work in progress" />
            </div>
        )
    }
    return (
        showLoginForm ? 
        <>
            {page()}
            <Login openModal={showLoginForm} />
        </>
        :
        page()
    )
}

export default About;