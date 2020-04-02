// import React from 'react';
// import ReactDOM from 'react-dom';
// import './styles/index.scss';
// import Header from './Header';
// import Articles from './Articles';
// import Button from 'react-bootstrap/Button';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

// ReactDOM.render(
//   <React.StrictMode>
//     <Header />
//     <Router>
//       <Articles />
//       <Button variant="primary">Primary</Button>{' '}
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)