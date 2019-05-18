import React from 'react';
import { render, debugDOM } from 'react-testing-library';
import App from './App';
import ProductList from './ProductList';

jest.mock('./ProductList', () => {
  return jest.fn(() => null);
});

jest.mock('./ShoppingCart', () => {
  return jest.fn(() => null);
});

describe('App', () => {

  it('should render', () => {
    render(<App />);
    const context = expect.any(Object);
    expect(ProductList).toHaveBeenCalledWith({
      onAddProduct: expect.any(Function),
      products: ['Tomato', 'Apple', 'Oranges'],
    }, context);
  });

});
