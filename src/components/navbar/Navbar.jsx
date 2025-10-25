import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Search, Menu, X } from "lucide-react";
import  Button  from "../ui/Button";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { selectCartCount } from "../../store/cartSlice";
import { selectIsAuthenticated, selectUser, logout } from "../../store/authSlice";
import { useToast } from "../../hooks/useToast";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const cartCount = useAppSelector(selectCartCount);
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleLogout = () => {
    dispatch(logout());
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-primary">ShopWave</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-primary transition-colors">
              <Search size={20} />
            </button>

            <UserMenu 
              isAuthenticated={isAuthenticated} 
              user={user} 
              onLogout={handleLogout}
            />

            <Link 
              to="/cart" 
              className="relative text-gray-600 hover:text-primary transition-colors"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-600 hover:text-primary"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen}
        cartCount={cartCount}
        isAuthenticated={isAuthenticated}
        user={user}
        onLogout={handleLogout}
        onClose={() => setMobileMenuOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
