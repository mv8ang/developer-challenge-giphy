import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import reducers
import results from './results';
import searchHistory from './searchHistory';

const rootReducer = combineReducers({results, searchHistory, routing: routerReducer});
export default rootReducer;