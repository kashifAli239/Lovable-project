import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Minus, Plus, Trash } from "lucide-react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { selectCartItems, selectCartTotal, removeFromCart, updateQuantity, clearCart } from "../store/cartSlice";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Cart = () => {
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);
  const dispatch = useAppDispatch();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto py-8 px-4">
        <div className="flex items-center mb-8">
          <Link to="/" className="text-gray-600 hover:text-primary flex items-center">
            <ArrowLeft size={20} className="mr-2" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl font-bold ml-auto">Your Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added any products yet.</p>
            <Link to="/products" className="bg-primary text-white px-6 py-3 rounded">Browse Products</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="py-6 flex">
                    <img src={item.image} alt={item.name} className="h-24 w-24 object-cover border rounded-md" />
                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <h3>
                          <Link to={`/product/${item.id}`}>{item.name}</Link>
                        </h3>
                        <p>${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-end justify-between">
                        <div className="flex items-center border rounded">
                          <button onClick={() => dispatch(updateQuantity({ productId: item.id, quantity: item.quantity - 1 }))} className="p-2">
                            <Minus size={14} />
                          </button>
                          <span className="px-4">{item.quantity}</span>
                          <button onClick={() => dispatch(updateQuantity({ productId: item.id, quantity: item.quantity + 1 }))} className="p-2">
                            <Plus size={14} />
                          </button>
                        </div>
                        <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-600">
                          <Trash size={14} />
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1 p-6 bg-white rounded-lg shadow">
              <h2 className="text-lg font-medium">Order Summary</h2>
              <div className="flex justify-between py-2">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between py-2">
                <span>Tax</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between py-2 font-bold">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <button className="bg-primary text-white w-full py-3 rounded">Proceed to Checkout</button>
              <button onClick={() => dispatch(clearCart())} className="border w-full py-3 rounded mt-4">
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
