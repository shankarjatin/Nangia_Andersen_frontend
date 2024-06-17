import { combineReducers } from 'redux';
import authReducer from './authReducer';
import candidateReducer from './candidateReducer';

export default combineReducers({
  auth: authReducer,
  candidates: candidateReducer,
});
