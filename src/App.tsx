import React, { useState } from 'react';
import './App.css';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';

export const initialProducts = ['Tomatoes', 'Apples', 'Oranges', 'Coffee'];

const App: React.FC = () => {

  const [products] = useState<string[]>(initialProducts);
  const [shoppingCart, setShoppingCart] = useState<string[]>([]);

  function addToShoppingCart(product: string) {
    setShoppingCart([...shoppingCart, product]);
  }

  function removeFromShoppingCart(item: string) {
    setShoppingCart(shoppingCart.filter(it => it !== item));
  }

  return (
    <div>
      <ProductList
        products={products}
        addProduct={product => addToShoppingCart(product)}
      />
      <ShoppingCart
        items={shoppingCart}
        removeItem={item => removeFromShoppingCart(item)}
      />
    </div>
  );
};

export default App;
