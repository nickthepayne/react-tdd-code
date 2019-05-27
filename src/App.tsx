import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';

export const dummyProducts = ['Tomato', 'Apple', 'Orange'];

const App: React.FC = () => {
  const [cart, setCart] = useState<string[]>([]);

  function addToCart(product: string) {
    return setCart([...cart, product]);
  }

  return (
    <div>
      <div>
        {cart.length === 0 && <div>Empty Cart</div>}
        {cart.map(item => (
          <div
            key={item}
            data-testid="cart-item"
          >
            {item}
          </div>
        ))}
      </div>
      <ProductList
        products={dummyProducts}
        add={addToCart}
      />
    </div>
  );
};

export default App;
