import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import {browserHistory, Router, Route} from 'react-router';

import Layout from './app/layouts/Layout';

ReactDOM.render(<Router history={browserHistory}>
  <Route path="/" component={Layout}>

  </Route>
</Router>, document.querySelector('#root')); 