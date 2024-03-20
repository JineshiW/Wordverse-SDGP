// Import necessary modules from React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import CSS file for styling
import './index.css';

// Import the main component of the application, 'App'
import App from './App';

// Import the function to report web vitals performance metrics
import reportWebVitals from './reportWebVitals';

// Import the Toaster component from 'react-hot-toast' for displaying toast notifications
import { Toaster } from 'react-hot-toast';

// Create a root element using ReactDOM.createRoot and specify the target DOM element with id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main application component wrapped in React.StrictMode and Toaster component inside the root
root.render(
  <React.StrictMode>
    <App /> {/* Render the main application component */}
    <Toaster/> {/* Render the Toaster component for toast notifications */}
  </React.StrictMode>
);

// Call the reportWebVitals function to measure and report performance metrics
// You can pass a callback function to log the results or send to an analytics endpoint
// Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
