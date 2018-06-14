import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import events from './events';
import volunteers from './volunteers'

const rootReducer = combineReducers({events, 
  volunteers, routing: routerReducer });


export default rootReducer;