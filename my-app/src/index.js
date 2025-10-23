import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './index.css';

let rootEl = document.getElementById('root');
let root = ReactDOM.createRoot(rootEl);
root.render(<App/>);