import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CarsContextProvider } from './context/carsContext';

ReactDOM.render(
  <CarsContextProvider>
    <App />
  </CarsContextProvider>,
  document.getElementById('root')
);

reportWebVitals();
