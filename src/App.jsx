import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products"; // Import Products page
import Cart from "./pages/Cart"; // Import Cart page

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} /> {/* Add Products route */}
          <Route path="/cart" element={<Cart />} /> {/* Add Cart route */}

        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
