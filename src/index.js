import React from 'react';
import { render } from 'react-dom';

// import css
require('./styles.scss');

// import React Router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store.js';

// import components
import App from './components/App/App';
import RandomGif from './components/RandomGif/RandomGif';
import Single from './components/Single/Single';

import Main from './components/Main/Main';

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={RandomGif} />
        <Route path="view/:postId" component={Single} />
      </Route>
    </Router>
  </Provider>
);

render(routes, document.getElementById('root'));
