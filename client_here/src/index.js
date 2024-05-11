import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// let next = document.querySelector('.next')
// let prev = document.querySelector('.prev')

// next.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item')
//     document.querySelector('.slide').appendChild(items[0])
// })

// prev.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item')
//     document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
