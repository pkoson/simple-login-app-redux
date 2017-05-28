// @flow
import { createStore, applyMiddleware } from 'redux';
import { addLocaleData } from 'react-intl';
import createSagaMiddleware from 'redux-saga';
import {
  composeWithDevTools
} from 'redux-devtools-extension/logOnlyInProduction';
import en from 'react-intl/locale-data/en';
import pl from 'react-intl/locale-data/pl';

import rootReducer from './rootReducer';
import rootSaga from './saga';
import localeData from './translation.json';

addLocaleData([...en, ...pl]);

const getMessages = (language: string) => {
  const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
  return (
    localeData[languageWithoutRegionCode] ||
    localeData[language] ||
    localeData.en
  );
};

const language =
  (navigator.languages && navigator.languages[0]) || navigator.language;

const initialState = {
  intl: {
    locale: language,
    messages: getMessages(language)
  }
};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
