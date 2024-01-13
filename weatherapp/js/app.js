import React from "react";
import {createRoot} from "react-dom/client";

const key = "b29e2d75-9512-4fcd-853d-22cc2220f5ea";

const App = () => {
    return (
        <div><h1>Hello World</h1></div>
    )
}


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);