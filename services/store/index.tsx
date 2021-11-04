import {combineReducers} from 'redux';
import home from './home/reducer';
import tools from './tools/reducer'

const rootReducer = {
  home,
  tools,
};

export default combineReducers(rootReducer);