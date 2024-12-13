import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import About from "./components/About.component.js";
import Body from "./components/Body.component.js";
import Contact from "./components/Contact.component.js";
import Header from "./components/Header.component.js";
import Error from "./components/Error.component.js";
import RestaurentMenu from "./components/RestaurentMenu.component.js";


const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
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
                element: <Contact />,
            },
            {
                path: "/restaurentMenu",
                element: <RestaurentMenu />,
            }
        ],
    },
]);




const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={appRouter} />
);