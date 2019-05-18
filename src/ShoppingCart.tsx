import React from 'react';

export interface ShoppingCartProps {
  removeItem: (item: string) => void;
  items: string[];
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ items, removeItem }) => {
  if (items.length === 0) {
    return <div>no items</div>;
  }

  return (
    <div className="items">
      {items.map(item => (
        <div className="item" key={item}>
          <span>{item}</span>
          <span
            className="remove"
            onClick={() => removeItem(item)}
          >remove
          </span>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
