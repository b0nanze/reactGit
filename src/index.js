import ReactDOM from "react-dom"
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./styles.css"
import React from "react";
import OperatopTer from "./OperatopTer";
import CheckProp from "./CheckProp";


ReactDOM.render(
    <div className="calc">
        <Header />
        <Main />
        <Footer />
        <OperatopTer hours = "20"/>  {/*1 задание*/}
        <CheckProp /> {/* Потому что в условии у нас пропс, и поэтому всегда при любых пропсах будет первое выражение */}

    </div>,
    document.getElementById('root')
)



