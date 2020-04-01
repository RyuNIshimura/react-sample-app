import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Header from './Header';
import Articles from './Articles';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Articles />
  </React.StrictMode>,
  document.getElementById('root'),
);
