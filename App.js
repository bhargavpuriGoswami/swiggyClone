import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.component.js";
import Body from "./components/Body.component.js";





const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <Header />
        <Body />
    </>
);