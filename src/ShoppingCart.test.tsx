import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from 'react-testing-library';
import { ShoppingCart } from './App';

describe('ShoppingCart', () => {
    describe('when the cart is empty', () => {
        it('displays \'Cart is empty\'', () => {
            const renderResult = render(<ShoppingCart cart={[]} />);
            expect(renderResult.getByText('Cart is empty')).toBeInTheDocument();
        });
    });
});
