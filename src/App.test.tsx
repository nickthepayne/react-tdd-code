import React from 'react';
import { cleanup, render, RenderResult } from 'react-testing-library';
import App from './App';

afterEach(cleanup);

describe('App', () => {

  let app: RenderResult;

  beforeEach(() => {
    app = render(<App/>);
  });

});
