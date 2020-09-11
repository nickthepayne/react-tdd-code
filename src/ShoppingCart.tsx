import React from 'react';

export interface ShoppingCartProps {
    cart: string[];
}

export const ShoppingCart: React.FC<ShoppingCartProps> = ({ cart }) => {
    const groupedItems = cart.reduce((acc: any, curr: string) => {
        if (!acc[curr]) {
            acc[curr] = 1;
        } else {
            acc[curr]++;
        }
        return acc;
    }, {});

    function getLabel(key: string) {
        return `${key}${groupedItems[key] > 1 ? ` x${groupedItems[key]}` : ''}`;
    }

    return (
        <div>
            {cart.length === 0 && 'Cart is empty'}
            {Object.keys(groupedItems).map(key => (
                <div
                    key={key}
                    data-testid="cart-item"
                >
                    {getLabel(key)}
                </div>
            ))}
        </div>
    );
};
