import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

const App: React.FC = () => {
  const [products] = useState<string[]>(['Tomato', 'Apple', 'Oranges']);
  const [shoppingCart, setShoppingCart] = useState<string[]>([]);

  return (
    <div>
      <ProductList
        products={products}
        onAddProduct={product => setShoppingCart([...shoppingCart, product])}
      />
      <ShoppingCart
        products={shoppingCart}
      />
    </div>
  );
};

export default App;
