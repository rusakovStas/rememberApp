import React from 'react';
import {GithubLoginButton, GoogleLoginButton} from "react-social-login-buttons";


const Login = () => {
    return (
        <div className="App">
            <h1 style={{
                fontFamily: "Montserrat",
                fontWeight: "600"
            }}>Привет</h1>
            <div style={{display: "grid", gridTemplateRows: "auto auto", gridGap: "5px", placeItems: "center"}}>
                <GoogleLoginButton onClick={() => window.open("/oauth2/authorization/google","_self")}>
                    <span>Войти через Google</span>
                </GoogleLoginButton>
                <GithubLoginButton onClick={() => window.open("/oauth2/authorization/github","_self")}>
                    <span>Войти через Github</span>
                </GithubLoginButton>
            </div>
        </div>
    )
}

export default Login;
