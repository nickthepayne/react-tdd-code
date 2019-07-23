import React from 'react';
import { cleanup, render, RenderResult, fireEvent } from 'react-testing-library';
import App, { dummyProducts } from './App';

afterEach(cleanup);

jest.mock('./ManyChildren', () => ({
  ManyChildren: 'div'
}));

describe('App', () => {

  let component: RenderResult;

  beforeEach(() => {
    component = render(<App/>);
  });

  it('should show "Empty Cart"', () => {
    expect(component.getByText('Empty Cart')).not.toBeNull();
  });

  it('should display all products', () => {
    dummyProducts.forEach(product => {
      expect(component.getByText(product)).not.toBeNull();
    });
  });

  it('should add a product to the shopping cart', () => {
    const allProductItems = component.getAllByTestId('product-item');
    const productToAdd = allProductItems[0];

    fireEvent.click(productToAdd);

    const cartItems = component.getAllByTestId('cart-item');
    expect(cartItems).toHaveLength(1);
    expect(component.queryByText('Empty Cart')).toBeNull();
  });

  it('should not render many children', () => {
    expect(component.queryAllByText('child')).toHaveLength(0);
  });
});
