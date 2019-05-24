import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

export const mockProducts = ['Tomato', 'Apple', 'Oranges'];

const App: React.FC = () => {
  const [products] = useState<string[]>(mockProducts);
  const [shoppingCart, setShoppingCart] = useState<string[]>([]);

  const onAddProduct = (product: string) => setShoppingCart([...shoppingCart, product]);

  return (
    <div>
      <ProductList
        products={products}
        onAddProduct={onAddProduct}
      />
      <ShoppingCart
        products={shoppingCart}
      />
    </div>
  );
};

export default App;
