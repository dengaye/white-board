import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Container from './container';
import './styles/index.css';

import About from './pages/about';
import Home from './pages/home';

ReactDom.render(
  <BrowserRouter>
    <Switch>
      <Route path='/'>
        <Container>
          <Route path='/about' component={About} />
          <Route path='/home' component={Home} />
        </Container>
      </Route>
    </Switch>
  </BrowserRouter>,
  window.document.getElementById('root')
);
