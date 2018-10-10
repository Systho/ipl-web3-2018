import React from "react";
import ReactDOM from "react-dom";
import ReactMain from "../react/components/main";

import 'bootstrap/dist/css/bootstrap.css';
import "../style/application.scss";


// react
const rootElem = document.body.querySelector('#root');
const reactMainElem = React.createElement(ReactMain, {});
ReactDOM.render(reactMainElem, rootElem );
