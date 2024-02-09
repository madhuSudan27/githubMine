import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));

//dev-m8ticrzyv22lkrqt.us.auth0.com
// dCIsxR3bx1lQ547sNwUgiErVVcc4OSXX <- client
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-m8ticrzyv22lkrqt.us.auth0.com"
      clientId="dCIsxR3bx1lQ547sNwUgiErVVcc4OSXX"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
