import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/cart/CartItem';

const Cart = () => {
  const { cart, cartTotal, cartCount, updateQuantity, removeFromCart, clearCart } = useCart();

  if (cart.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded transition-colors duration-200"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
            {cart.items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemoveItem={removeFromCart}
              />
            ))}
          </div>
          
          <div className="mt-4 flex justify-end">
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-800 text-sm font-medium"
            >
              Clear Cart
            </button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Items ({cartCount})</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <button
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md font-medium transition-colors duration-200"
                onClick={() => alert('Proceeding to checkout!')}
              >
                Proceed to Checkout
              </button>
              
              <div className="text-center">
                <Link
                  to="/"
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
