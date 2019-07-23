import React, { useState } from 'react';
import './App.css';
import { ManyChildren } from './ManyChildren';

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
        addProduct={addProductToCart}
      />
      <ManyChildren/>
    </div>
  );
};

export default App;

interface ShoppingCartProps {
  cart: string[];
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({cart}) => (
  <div>
    {cart.length === 0 && 'Empty Cart'}
    {cart.map(cartItem => (
      <div
        data-testid="cart-item"
        key={cartItem}
      >
        {cartItem}
      </div>
    ))}
  </div>
);

interface ProductListProps {
  products: string[];
  addProduct: (product: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({products, addProduct}) => (
  <div>
    {products.map(product => (
      <div
        data-testid="product-item"
        key={product}
        onClick={() => addProduct(product)}
      >
        {product}
      </div>
    ))}
  </div>
);
