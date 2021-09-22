import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Login.css';

function LoginPage(){

    return(
        <div className="auth-wrapper">
            <div className="auth-inner">
                <form>
                    <h1>Sign In</h1>
                    <div className="form-group">
                        <label >Insira o seu ID</label>
                        <input type="number" className="form-control" placeholder="Insira o seu ID" />
                    </div>
                    
                    <Link to="/id">
                      <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </Link>        
                </form>             
            </div>
         </div>
    )
}

export default LoginPage;