import React from 'react';

export interface ShoppingCartProps {
  products: string[];
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ products }) => {
  if (products.length === 0) {
    return <div>Cart is empty</div>;
  }

  return (
    <div>
      {products.map(product => (
        <div key={product}>{product}</div>
      ))}
    </div>
  );
};

export default ShoppingCart;
