import React from 'react';
import { cleanup, render, RenderResult, fireEvent } from 'react-testing-library';
import App, { dummyProducts, ShoppingCart, ShoppingCartProps } from './App';

afterEach(cleanup);

describe('ShoppingCart', () => {

  it('should show x2 when an item is added twice', () => {
    const props: ShoppingCartProps = {
      cart: ['item1', 'item1']
    };

    const component = render(<ShoppingCart {...props} />);

    expect(component.getByText('item1 x2')).not.toBeNull();
  });

});

describe('App', () => {

  let component: RenderResult;

  beforeEach(() => {
    component = render(<App />);
  });

  it('should display "Cart is empty"', () => {
    expect(component.getByText('Cart is empty')).not.toBeNull();
  });

  it('should display all products', () => {
    dummyProducts.forEach(product => {
      expect(component.getByText(product)).not.toBeNull();
    });
  });

  it('should add a product to the cart', () => {
    const allProductItems = component.getAllByTestId('product-item');
    const productToAdd = allProductItems[0];

    fireEvent.click(productToAdd);

    const allCartItems = component.getAllByTestId('cart-item');
    expect(allCartItems).toHaveLength(1);
    expect(allCartItems[0].innerHTML).toBe('Tomato');
    expect(component.queryByText('Empty Cart')).toBeNull();
  });
});
