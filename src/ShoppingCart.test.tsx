import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import ShoppingCart, { ShoppingCartProps } from './ShoppingCart';

const props: ShoppingCartProps = {
  items: [],
  removeItem: jest.fn(),
};

describe('ShoppingCart', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<ShoppingCart {...props}/>);
  });

  describe('when there are no products', () => {
    it('should render "no items"', () => {
      expect(wrapper.text()).toBe('no items');
    });
  });

  describe('when there are items', () => {
    const items = ['Tomato', 'Apple'];

    beforeEach(() => {
      wrapper.setProps({ items });
    });

    it('should render a list of items', () => {
      expect(wrapper.find('.item').length).toBe(items.length);
    });

    it('should call removeItem when remove is clicked', () => {
      wrapper.find('.remove').at(0).simulate('click');
      expect(props.removeItem).toHaveBeenCalledWith('Tomato');
    });
  });

});
