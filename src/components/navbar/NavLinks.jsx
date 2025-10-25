import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks = ({ onClick }) => {
  return (
    <>
      <Link 
        to="/" 
        className="text-gray-600 hover:text-primary transition-colors"
        onClick={onClick}
      >
        Home
      </Link>
      <Link 
        to="/products" 
        className="text-gray-600 hover:text-primary transition-colors"
        onClick={onClick}
      >
        Products
      </Link>
      <Link 
        to="/products" 
        className="text-gray-600 hover:text-primary transition-colors"
        onClick={onClick}
      >
        Categories
      </Link>
      <Link 
        to="/" 
        className="text-gray-600 hover:text-primary transition-colors"
        onClick={onClick}
      >
        About
      </Link>
    </>
  );
};

export default NavLinks;
