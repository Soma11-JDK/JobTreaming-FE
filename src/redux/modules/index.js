import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import auth from './auth';
import user from './user';
import search from './search';

export default combineReducers({
  auth,
  user,
  search,
  pender: penderReducer,
});
