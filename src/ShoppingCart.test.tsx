import React from 'react';
import { cleanup, render, RenderResult } from 'react-testing-library';
import ShoppingCart, { ShoppingCartProps } from './ShoppingCart';

const getProps = (products: string[]): ShoppingCartProps => ({
  products,
});

afterEach(() => {
  cleanup();
});

describe('ShoppingCart', () => {

  it('should display "Cart is empty"', () => {
    const props = getProps([]);
    const shoppingCart = render(<ShoppingCart {...props}/>);
    expect(shoppingCart.getByText('Cart is empty')).not.toBeNull();
  });

  describe('when the shopping cart has products', () => {

    const products = ['Tomato', 'Apple'];
    let shoppingCart: RenderResult;

    beforeEach(() => {
      const props = getProps(products);
      shoppingCart = render(<ShoppingCart {...props}/>);
    });

    it('should display all the products', () => {
      products.forEach(product => {
        expect(shoppingCart.getByText(product)).not.toBeNull();
      });
    });

    it('should not display "Cart is empty"', () => {
      expect(shoppingCart.queryByText('Cart is empty')).toBeNull();
    });
  });
});
