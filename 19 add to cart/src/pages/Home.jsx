import { Link } from 'react-router-dom';
import ProductList from '../components/products/ProductList';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to ShopEase</h1>
              <p className="text-xl mb-6">Discover amazing products at great prices</p>
              <Link
                to="/products"
                className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Shop Now
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Shopping"
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <ProductList limit={4} />
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition-colors duration-200"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
              <p className="text-gray-600">We offer only the best quality products from trusted brands.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable shipping to your doorstep.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-blue-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment options for your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
