import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Header from './Header';
import Article from './Article';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Article />
  </React.StrictMode>,
  document.getElementById('root'),
);
