// Importing necessary modules
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css"; // Importing CSS styles
import App from "./components/App"; // Importing the root component of the application

// Importing Redux related modules
import store from "./redux/store"; // Importing the Redux store
import { Provider } from "react-redux"; // Importing Provider component from react-redux

// Creating a root using ReactDOM.createRoot and rendering the application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Wrapping the entire application with the Provider component to provide Redux store access
  <Provider store={store}>
    <App /> {/* Rendering the root component of the application */}
  </Provider>
);
