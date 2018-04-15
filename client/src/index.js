import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers } from 'redux-immutablejs';
import { createStore } from 'redux';
import { reducer as form } from 'redux-form/immutable';
import { Provider } from 'react-redux';
import { initialize, addTranslation, localeReducer as locale } from 'react-localize-redux';
import navigation from './redux/navigation';
import App from './scenes/App';

const rootReducer = combineReducers({
  'navigation': navigation,
  locale,
  form
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

const languages = [
  { name: 'English', code: 'en' }
];

store.dispatch(initialize(languages));

const languageJson = require('./config/global.locale.json');

store.dispatch(addTranslation(languageJson));


ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
