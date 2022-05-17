//@Libs
import React from 'react';
import ReactDOM from 'react-dom/client';
//@Components
import ReactQueryProvider from './providers/ReactQueryProvider';
//@Helpers
import reportWebVitals from './reportWebVitals';
//@Styles
import './scss/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ReactQueryProvider />
  </React.StrictMode>
);

reportWebVitals();
