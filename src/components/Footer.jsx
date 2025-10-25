import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-xl font-bold text-primary">ShopWave</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Quality products for modern living. Discover the perfect items for your lifestyle.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Shop</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/products" className="text-sm text-gray-600 hover:text-primary">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-gray-600 hover:text-primary">
                  Featured Items
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-gray-600 hover:text-primary">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-gray-600 hover:text-primary">
                  Sales & Discounts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-primary">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-primary">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-primary">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-primary">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-primary">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} ShopWave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
