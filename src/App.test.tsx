import React from 'react';
import { cleanup, fireEvent, render, RenderResult } from 'react-testing-library';
import App, { mockProducts } from './App';

afterEach(cleanup);

describe('App', () => {

  let app: RenderResult;

  beforeEach(() => {
    app = render(<App/>);
  });

  it('should initially display "Cart is empty"', () => {
    expect(app.queryByText('Cart is empty')).not.toBeNull();
  });

  it('should initially not display "No Products"', () => {
    expect(app.queryByText('No Products')).toBeNull();
  });

  it('should initially display all products', () => {
    const productNames = app.queryAllByTestId('product-name')
      .map((element: { innerHTML: any; }) => element.innerHTML);

    expect(productNames).toEqual(mockProducts);
  });

  it('should add the product to the cart when the add button is clicked', () => {
    fireEvent.click(app.queryAllByTestId('add-product')[0]);
    const cartItems = app.queryAllByTestId('cart-item');
    expect(cartItems.length).toBe(1);
  });

});
