import React, { useState } from 'react';
import './App.css';

export const dummyProducts = ['Tomato', 'Apple', 'Orange'];

const App: React.FC = () => {

  const [cart, setCart] = useState<string[]>([]);

  function addProductToCart(product: string) {
    setCart([...cart, product]);
  }

  return (
    <div>
      <ShoppingCart
        cart={cart}
      />
      <ProductList
        products={dummyProducts}
        addProductToCart={addProductToCart}
      />
    </div>
  );
};

export default App;

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

interface ProductListProps {
  products: string[];
  addProductToCart: (product: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, addProductToCart }) => (
  <div>
    {products.map(product => (
      <div
        data-testid="product-item"
        key={product}
        onClick={() => addProductToCart(product)}
      >
        {product}
      </div>
    ))}
  </div>
);
