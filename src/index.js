import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "tw-elements";
import Scroll from "./Scroll";
import {MyContext, MyContext2} from "./MyComponents/Homepage/MyContext";
import { Provider } from "react-redux";
import mystore from "./Redux/Store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={mystore}>
  <MyContext2>
  <React.StrictMode>

    <BrowserRouter >
      <Scroll />
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </MyContext2>
  </Provider>
);
