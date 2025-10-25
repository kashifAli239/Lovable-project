import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { getFeaturedProducts } from '../data/products';

const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products that stand out for their quality and design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/products" 
            className="inline-block text-primary hover:text-primary/80 font-medium border-b-2 border-primary pb-1 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
