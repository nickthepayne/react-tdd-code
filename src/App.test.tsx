import React from 'react';
import { cleanup, render, RenderResult, fireEvent } from 'react-testing-library';
import App, { dummyProducts } from './App';

afterEach(cleanup);

describe('App', () => {

  let app: RenderResult;

  beforeEach(() => {
    app = render(<App/>);
  });

  it('should initially show "Empty Cart"', () => {
    expect(app.queryByText('Empty Cart')).not.toBeNull();
  });

  it('should show all products', () => {
    dummyProducts.forEach(product => {
      expect(app.queryByText(product)).not.toBeNull();
    });
  });

  it('should add product to cart when add is clicked', () => {
    const add = app.queryAllByText('Add')[0];
    fireEvent.click(add);

    const cartItems = app.queryAllByTestId('cart-item');
    expect(cartItems.length).toBe(1);
    expect(app.queryByText('Empty Cart')).toBeNull();
  });
});
