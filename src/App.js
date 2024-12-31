import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About.component.js";
import Body from "./components/Body.component.js";
//import Contact from "./components/Contact.component.js";
import Header from "./components/Header.component.js";
import Error from "./components/Error.component.js";
//import RestaurentMenu from "./components/RestaurentMenu.component.js";
import {Provider } from "react-redux";
import store from "./utils/store/appStore.js";
import loadingGif from "./public/img/elastic.gif";
import LoginFormContext from "./components/Contexts/LoginFormContext.js";


const Contact = lazy(() => import("./components/Contact.component.js"));
const RestaurentMenu = lazy(() => import("./components/RestaurentMenu.component.js"));
const Cart = lazy(() => import("./components/Cart.component.js"));
const Login = lazy(() => import("./components/Login.component.js"));


const AppLayout = () => {
    const [showLoginForm, setShowLoginForm] = React.useState(false);
    return (
        <>
            <Provider store={store}> 
                <LoginFormContext.Provider value={{ showLoginForm, setShowLoginForm}}>
                    <Header />
                    <Outlet />
                </LoginFormContext.Provider>
            </Provider>
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Suspense fallback={<div className="h-full flex items-center justify-center"><img src={loadingGif} alt="loading" /></div>}><Contact /></Suspense>,
            },
            {
                path: "/restaurant/:resId",
                element:  <Suspense fallback={<div className="h-full flex items-center justify-center"><img src={loadingGif} alt="loading" /></div>}><RestaurentMenu /></Suspense>,
            },
            {
                path: "/cart",
                element: <Suspense fallback={<div className="h-full flex items-center justify-center"><img src={loadingGif} alt="loading" /></div>}><Cart /></Suspense>,
            },
        ],
    },
]);



const container = document.getElementById("root");
const root=ReactDOM.createRoot(container);
root.render(
    <RouterProvider router={appRouter} />
);