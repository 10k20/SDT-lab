import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/Common.scss';
import App from './App';
import Header from './Components/Header/Header';
import Auth from './Components/authForm/authForm';
import MainMenu from './Components/mainMenu/mainMenu';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Auth />
    <MainMenu />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
