import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import ProductList, { ProductListProps } from './ProductList';

const props: ProductListProps = {
  products: [],
  addProduct: jest.fn(),
};

describe('ProductList', () => {

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<ProductList {...props}/>);
  });

  describe('when there are no products', () => {
    it('should display "no items"', () => {
      expect(wrapper.text()).toBe('no products');
    });
  });

  describe('when there are products', () => {
    const products = ['Tomato', 'Orange'];

    beforeEach(() => {
      wrapper.setProps({ products });
    });

    it('should render a list of items', () => {
      expect(wrapper.find('.list-item').length).toBe(products.length);
      expect(wrapper.find('.list-item').at(0).text()).toContain('Tomato');
      expect(wrapper.find('.list-item').at(1).text()).toContain('Orange');
    });

    it('should call addProduct when add is clicked', () => {
      wrapper.find('.list-item').at(0).find('.add').simulate('click');
      expect(props.addProduct).toHaveBeenCalledWith('Tomato');
    });
  });
});
