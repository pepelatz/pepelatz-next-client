import { combineReducers } from 'redux';

import me from './me';
import app from './app';

export default combineReducers({
  me,
  app
});
