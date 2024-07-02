// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './index.css';
// import App from './App';

// import AddMoviePage from "./Components/AddMovie/Movie.js"
// import UserPage from "./Components/Users/UserPage.js"
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { Provider } from 'react-redux'
// import store from './store.js';
// import LoginPage from './Components/LoginPage/LoginPage.js';




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>

//       <App/>

//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Provider } from 'react-redux';
import store from './store.js';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

