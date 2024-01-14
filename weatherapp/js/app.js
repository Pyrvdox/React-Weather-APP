import React from "react";
import {createRoot} from "react-dom/client";
import HeaderContainer from "./Containers/HeaderContainer";
import Main from "./Components/Main";
import {Provider} from "react-redux";
import store from "./redux/store";

const key = "b29e2d75-9512-4fcd-853d-22cc2220f5ea";

const App = () => {
    return (
        <Provider store={store}>
            <HeaderContainer />
            <Main />
        </Provider>


    )
}


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);