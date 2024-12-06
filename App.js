import React from "react";
import ReactDOM from "react-dom/client";


const heading1 = <h1>JSX-heading</h1>;
const heading2=React.createElement("h1", null, "Hello World from React");
const Heading3 = () =>{
    return(
        <h1>React component heading</h1>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading3 />);