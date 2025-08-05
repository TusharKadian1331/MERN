import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
      // Reset quantity after adding to cart
      setQuantity(1);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 h-96 bg-gray-200 rounded"></div>
            <div className="w-full md:w-1/2 space-y-4">
              <div className="h-6 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-12 bg-gray-200 rounded w-full mt-8"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link
          to="/products"
          className="text-blue-600 hover:underline"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Images */}
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-contain p-4"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(product.rating?.rate || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600 text-sm">
              {product.rating?.count || 0} reviews
            </span>
          </div>

          <div className="text-3xl font-bold text-gray-900 mb-6">
            ${product.price.toFixed(2)}
          </div>

          <p className="text-gray-700 mb-6">{product.description}</p>

          <div className="mb-6">
            <span className="text-sm text-gray-600">Category: </span>
            <span className="font-medium">{product.category}</span>
          </div>

          <div className="flex items-center mb-8">
            <span className="mr-4">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
              >
                −
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(prev => prev + 1)}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-200 flex-1"
            >
              Add to Cart
            </button>
            <button className="bg-gray-800 hover:bg-gray-900 text-white py-3 px-8 rounded-lg font-medium transition-colors duration-200 flex-1">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Product Description</h2>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-700 leading-relaxed">
            {product.description}
          </p>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Features</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>High-quality materials for durability</li>
              <li>Designed for comfort and style</li>
              <li>Perfect for everyday use</li>
              <li>Easy to clean and maintain</li>
              <li>Customer satisfaction guaranteed</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
