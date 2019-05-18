import React from 'react';

export interface ProductListProps {
  products: string[];
  addProduct: (p: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, addProduct }) => {
  if (products.length === 0) {
    return <div>no products</div>;
  }

  return (
    <div className="product-list">
      {products.map(p => (
        <div className="list-item" key={p}>
          <span>{p}</span>
          <span
            className="add"
            onClick={() => addProduct(p)}
          >add
          </span>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
