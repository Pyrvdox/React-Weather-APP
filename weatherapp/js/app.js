import React from "react";
import {createRoot} from "react-dom/client";
import Header from "./Components/Header";
import Main from "./Components/Main";

const key = "b29e2d75-9512-4fcd-853d-22cc2220f5ea";

const App = () => {
    return (
        <>
            <Header />
            <Main />
        </>


    )
}


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);