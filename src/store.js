import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

const results = [{postId: 133, title: "A bear"}, {postId: 332, title: "A Tuborg"}];
const searchHistory = [{postId: 441, title: "a dildo"}, {postId: 442, title: "A cornpop"}];

const defaultState = {
  results,
  searchHistory,
}

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);
export default store;