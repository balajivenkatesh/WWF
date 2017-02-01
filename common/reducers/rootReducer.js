import { combineReducers } from 'redux';
import boardReducer from './boardReducer';
import keyboardReducer from './keyboardReducer';

const rootReducer = combineReducers({
  boardReducer, keyboardReducer
});

export default rootReducer;