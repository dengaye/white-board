import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './app';
import './styles/index.css';

import About from './pages/about';
import Home from './pages/home';

ReactDom.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={App} />
      <Route path='/about' component={About} />
      <Route path='/home' component={Home} />
    </Switch>
  </BrowserRouter>,
  window.document.getElementById('root')
);
