import React from 'react';

interface ProductListProps {
  products: string[];
  add: (product: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, add }) => (
  <div>
    {products.map(product => (
      <div key={product}>
        {product}
        <span
          onClick={() => add(product)}
        >
          Add
        </span>
      </div>
    ))}
  </div>
);

export default ProductList;
