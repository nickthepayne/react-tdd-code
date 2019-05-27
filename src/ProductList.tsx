import React from 'react';

export interface ProductListProps {
  products: string[];
  onAddProduct: (product: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddProduct }) => {
  if (products.length === 0) {
    return <div>No Products</div>;
  }

  return (
    <div>
      {products.map(product => (
        <div key={product} data-testid="product">
          <span data-testid="product-name">{product}</span>
          <button
            onClick={() => onAddProduct(product)}
            data-testid="add-product"
          >Add
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
