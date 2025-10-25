import React from 'react';
import { X, Minus, Plus, ShoppingBag, Trash } from 'lucide-react';
import  Button  from './ui/Button';
import { Separator } from './ui/separator';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { 
  selectCartItems, 
  selectCartTotal, 
  selectIsCartOpen, 
  removeFromCart, 
  updateQuantity, 
  clearCart, 
  toggleCart 
} from '../store/cartSlice';

const ShoppingCart = () => {
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);
  const isCartOpen = useAppSelector(selectIsCartOpen);
  const dispatch = useAppDispatch();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40" 
        onClick={() => dispatch(toggleCart())}
      ></div>
      
      {/* Cart panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-medium">Your Cart</h2>
          <button 
            onClick={() => dispatch(toggleCart())}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
            <ShoppingBag size={64} className="text-gray-300 mb-4" />
            <h3 className="text-xl font-medium mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Button onClick={() => dispatch(toggleCart())}>Continue Shopping</Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-4">
                {cartItems.map(item => (
                  <li key={item.id} className="flex gap-4">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border bg-gray-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <h3 className="text-sm font-medium">{item.name}</h3>
                        <p className="text-sm font-medium">${item.price.toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-xs text-gray-500">{item.description}</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border rounded">
                          <button
                            onClick={() => dispatch(updateQuantity({ productId: item.id, quantity: item.quantity - 1 }))}
                            className="p-1 text-gray-600 hover:text-primary"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-2 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => dispatch(updateQuantity({ productId: item.id, quantity: item.quantity + 1 }))}
                            className="p-1 text-gray-600 hover:text-primary"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="text-gray-500 hover:text-red-500"
                        >
                          <Trash size={16} />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-4 border-t">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">Calculated at checkout</span>
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between mb-4">
                <span className="text-lg font-medium">Total</span>
                <span className="text-lg font-bold">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="space-y-3">
                <Button className="w-full">Checkout</Button>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => dispatch(clearCart())}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
