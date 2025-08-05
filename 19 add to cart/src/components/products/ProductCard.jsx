import { Link } from 'react-router-dom';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/products/${product.id}`} className="block">
        <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-full object-contain"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 h-14">
            {product.title}
          </h3>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-sm text-gray-500">
              {product.category}
            </span>
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <button
          onClick={(e) => {
            e.preventDefault();
            onAddToCart(product);
          }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
