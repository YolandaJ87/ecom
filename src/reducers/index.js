import { combineReducers } from 'redux';
//nuevo
import { reducer as form } from 'redux-form';
import headerNavbar from './headernavbarReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  form,
  // state: (state = {}) => state
  headerNavbar,
  user
});

export default rootReducer;