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
      <h1>Products</h1>
      <ProductList
        products={products}
        onAddProduct={onAddProduct}
      />
      <h1>Cart</h1>
      <ShoppingCart
        products={shoppingCart}
      />
    </div>
  );
};

export default App;
