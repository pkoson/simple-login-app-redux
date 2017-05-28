// @flow
import React from 'react';
import { Provider } from 'react-intl-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import Home from './scenes/Home';

import store from './store';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
const App = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <div>
          <AppBar
            title="Simple Login App"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />
          <Home />
        </div>
      </MuiThemeProvider>
    </Provider>
  );
};

export default App;
