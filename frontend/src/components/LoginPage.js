import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './Login.css';

function LoginPage(){
    return(
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form>
                    <h1>Sign In</h1>
                    <div className="form-group">
                        <label>Insira o seu ID</label>
                        <input type="email" className="form-control" placeholder="Insira o seu ID" />
                    </div>
                    <div className="form-group">
                        <label>Insira a sua senha</label>
                        <input type="password" className="form-control" placeholder="Insira a sua senha" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
         </div>
    )
}

export default LoginPage;