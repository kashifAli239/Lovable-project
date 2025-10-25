import React from 'react';
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';
import  Button  from '../ui/Button';

const UserMenu = ({ isAuthenticated, user, onLogout, closeMenu, mobile = false }) => {
  const handleLogout = () => {
    onLogout();
    if (closeMenu) closeMenu();
  };

  if (mobile) {
    return isAuthenticated ? (
      <>
        <div className="px-3 py-2 text-base font-medium text-gray-600">
          Signed in as {user?.name}
        </div>
        <Link 
          to="/account" 
          className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
          onClick={closeMenu}
        >
          My Account
        </Link>
        <Link 
          to="/orders" 
          className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
          onClick={closeMenu}
        >
          Orders
        </Link>
        <button 
          className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
          onClick={handleLogout}
        >
          Logout
        </button>
      </>
    ) : (
      <>
        <Link 
          to="/login" 
          className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
          onClick={closeMenu}
        >
          Login
        </Link>
        <Link 
          to="/signup" 
          className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
          onClick={closeMenu}
        >
          Sign Up
        </Link>
      </>
    );
  }

  
  return isAuthenticated ? (
    <div className="relative group">
      <button className="flex items-center text-gray-600 hover:text-primary transition-colors">
        <User size={20} />
        <span className="ml-2 hidden md:block">{user?.name}</span>
      </button>
      <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-xl hidden group-hover:block">
        <Link 
          to="/account" 
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          My Account
        </Link>
        <Link 
          to="/orders" 
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Orders
        </Link>
        <button 
          onClick={onLogout}
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Logout
        </button>
      </div>
    </div>
  ) : (
    <div className="hidden md:flex items-center space-x-2">
      <Button variant="ghost" size="sm" asChild>
        <Link to="/login">Login</Link>
      </Button>
      <Button size="sm" asChild>
        <Link to="/signup">Sign Up</Link>
      </Button>
    </div>
  );
};

export default UserMenu;
