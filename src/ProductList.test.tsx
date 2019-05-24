import React from 'react';
import { cleanup, fireEvent, render, RenderResult } from 'react-testing-library';
import ProductList, { ProductListProps } from './ProductList';

afterEach(cleanup);

const onAddProduct = jest.fn();
const getProps = (products: string[]): ProductListProps => ({
  products,
  onAddProduct,
});

describe('ProductList', () => {

  describe('when given an empty list of products', () => {
    it('should display "No Products"', () => {
      const props = getProps([]);
      const productList = render(<ProductList {...props}/>);
      expect(productList.queryByText('No Products')).not.toBeNull();
    });
  });

  describe('when there are products products', () => {
    const products = ['Tomato', 'Orange', 'Banana'];
    const defaultProps = getProps(products);

    let productList: RenderResult;

    beforeEach(() => {
      productList = render(<ProductList {...defaultProps}/>);
    });

    it('should not display "No Products"', () => {
      expect(productList.queryByText('No Products')).toBeNull();
    });

    it('should display the products', () => {
      products.forEach(product => {
        expect(productList.queryByText(product)).not.toBeNull();
      });
    });

    describe('when user adds a product', () => {
      it('should call addProduct', () => {
        fireEvent.click(productList.getAllByTestId('add-product')[0]);
        expect(onAddProduct).toHaveBeenCalledWith('Tomato');
      });
    });
  });

});
