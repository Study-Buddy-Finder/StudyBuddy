import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './App.jsx';
=======
import { FormProvider } from 'react-hook-form';
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom'
>>>>>>> 3728426d5c3cafcb19b209d74d4f0bdfe48b6ec1


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById("root"));