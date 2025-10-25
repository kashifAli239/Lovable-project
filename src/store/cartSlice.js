import { createSlice } from "@reduxjs/toolkit";
import { toast } from "../components/ui/Sonner";

const initialState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
        toast(`Added another ${action.payload.name} to your cart`);
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
        toast(`Added ${action.payload.name} to your cart`);
      }
      state.isOpen = true;
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      toast("Item removed from cart");
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;

      if (quantity <= 0) {
        state.items = state.items.filter((item) => item.id !== productId);
        toast("Item removed from cart");
        return;
      }

      const item = state.items.find((item) => item.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
      toast("Cart cleared");
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

// Export actions and reducer
export const { addToCart, removeFromCart, updateQuantity, clearCart, toggleCart } = cartSlice.actions;
export default cartSlice.reducer;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
export const selectCartCount = (state) =>
  state.cart.items.reduce((count, item) => count + item.quantity, 0);
export const selectIsCartOpen = (state) => state.cart.isOpen;
