import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greeting from './greeting';
import Footer from './greetingfooter';
import MyButton from './button';
import MyNav from './myNav'; 

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
const root = ReactDOM.createRoot(document.getElementById('root'));
const elem1 = document.getElementById("greeting1");
root.render(
  <React.Fragment>
    <MyNav />

    <Greeting fullName = "Le Tien"/>
    <br />
    <Greeting fullName = "FPT-HCM"/>
    <br/>
    <Greeting/>
    <hr/>
    <Footer copyright ="By Mr.Tien" nowdate = {Date().toLocaleString()}/>
    <hr/>
    <MyButton />
    <hr/>
    <MyButton />
  </React.Fragment>
  )
reportWebVitals();