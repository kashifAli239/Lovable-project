import React from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";

const MobileMenu = ({ isOpen, cartCount, isAuthenticated, user, onLogout, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white pt-2 pb-4 px-4 space-y-1 border-t">
      <NavLinks onClick={onClose} />
      <Link 
        to="/cart" 
        className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
        onClick={onClose}
      >
        Cart {cartCount > 0 && `(${cartCount})`}
      </Link>
      
      <UserMenu 
        isAuthenticated={isAuthenticated} 
        user={user} 
        onLogout={onLogout} 
        closeMenu={onClose}
        mobile={true}
      />
    </div>
  );
};

export default MobileMenu;
