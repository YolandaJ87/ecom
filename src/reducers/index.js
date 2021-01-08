import { combineReducers } from 'redux';
//nuevo
import { reducer as form } from 'redux-form';
import HeaderNavbar from './headernavbarReducer';

const rootReducer = combineReducers({
  form,
  // state: (state = {}) => state
  HeaderNavbar
});

export default rootReducer;