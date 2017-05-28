import React from 'react';
import { render } from 'react-dom';

import App from './App';

describe('App component', () => {
  it('should renderer without crash', () => {
    const div = document.createElement('div');
    render(<App />, div);
  });
});
