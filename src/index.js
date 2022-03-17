import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
//Note:  Based on props you can use admin web app or user/student web app
ReactDOM.render(
  <BrowserRouter>
    <App usertype={'admin'} />
  </BrowserRouter>,

  document.getElementById('root')
);
