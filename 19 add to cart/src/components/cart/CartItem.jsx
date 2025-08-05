import { useState } from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ item, onUpdateQuantity, onRemoveItem }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className="p-4 flex flex-col sm:flex-row items-center gap-4">
      <Link to={`/products/${item.id}`} className="flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-20 h-20 object-contain"
        />
      </Link>
      
      <div className="flex-1 min-w-0">
        <Link to={`/products/${item.id}`} className="block">
          <h3 className="text-lg font-medium text-gray-900 truncate">
            {item.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-500">{item.category}</p>
        <p className="text-lg font-semibold text-gray-900 mt-1">
          ${item.price.toFixed(2)}
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center border border-gray-300 rounded-md">
          <button
            onClick={() => handleQuantityChange(quantity - 1)}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
          >
            −
          </button>
          <span className="w-10 text-center">{quantity}</span>
          <button
            onClick={() => handleQuantityChange(quantity + 1)}
            className="px-3 py-1 text-gray-600 hover:bg-gray-100"
          >
            +
          </button>
        </div>
        
        <button
          onClick={() => onRemoveItem(item.id)}
          className="text-red-600 hover:text-red-800"
          aria-label="Remove item"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
