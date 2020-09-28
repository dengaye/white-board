import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Container from './container';
import './styles/index.css';

ReactDom.render(
  <BrowserRouter>
    <Route path='/' component={Container} />
  </BrowserRouter>,
  window.document.getElementById('root')
);
