import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './components/LoginPage';
import Main from './components/AppComponents';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <Switch>
        <Route component={App} path="/" exact />
        <Route component={Login} path="/login"/>
        <Route component={Main} patth="/id/"/>
      </Switch>
      </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
