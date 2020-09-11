import React, { useState } from 'react';
import './App.css';
import { ShoppingCart } from './ShoppingCart';

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
