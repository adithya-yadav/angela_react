import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './kiviCare/App';
// import App from './angela/App';
import reportWebVitals from './reportWebVitals';
import PageTabs from './PageTabs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PageTabs />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
