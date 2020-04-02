import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Header from './Header';
import Articles from './Articles';
import Button from 'react-bootstrap/Button';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Articles />
    <Button variant="primary">Primary</Button>{' '}
  </React.StrictMode>,
  document.getElementById('root'),
);
