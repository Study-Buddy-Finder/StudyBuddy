import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.jsx';
import { FormProvider } from 'react-hook-form';
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom'


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById("root"));