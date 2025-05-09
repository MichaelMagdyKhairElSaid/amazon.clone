import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'; 

const root = ReactDOM.createRoot(document.getElementById('root')); //main component
root.render(
  <>
    <App />
  </>
);

