import ReactDOM from "react-dom"
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./styles.css"
import React from "react";

ReactDOM.render(
    <div className="calc">
        <Header />
        <Main />
        <Footer />
    </div>,
    document.getElementById('root')
)



