// @flow
import { combineReducers } from 'redux';
import { intlReducer } from 'react-intl-redux';
import homeReducer from './scenes/Home/reducer';

const rootReducer = combineReducers({
  intl: intlReducer,
  home: homeReducer
});

export default rootReducer;
