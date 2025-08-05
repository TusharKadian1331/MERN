import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/common/Header';
import Home from './pages/Home';
import ProductList from './components/products/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow bg-gray-50">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<div className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
                <a
                  href="/"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition-colors duration-200"
                >
                  Go to Homepage
                </a>
              </div>} />
            </Routes>
          </main>
          <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-2xl font-bold">ShopEase</h2>
                  <p className="text-gray-400">Your one-stop shop for everything</p>
                </div>
                <div className="flex space-x-6">
                  <a href="#" className="text-gray-300 hover:text-white">About Us</a>
                  <a href="#" className="text-gray-300 hover:text-white">Contact</a>
                  <a href="#" className="text-gray-300 hover:text-white">Terms & Conditions</a>
                  <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
                </div>
              </div>
              <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} ShopEase. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
