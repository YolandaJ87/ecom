import { combineReducers } from 'redux';
//nuevo
import { reducer as form } from 'redux-form';
import headerNavbar from './headernavbarReducer';

const rootReducer = combineReducers({
  form,
  // state: (state = {}) => state
  headerNavbar
});

export default rootReducer;