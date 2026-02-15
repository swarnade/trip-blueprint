import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css"
ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_API_OAUTH}>
    <App />
  </GoogleOAuthProvider>
);
