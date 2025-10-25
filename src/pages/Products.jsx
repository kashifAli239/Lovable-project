import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import ShoppingCart from '../components/ShoppingCart';
import { products } from '../data/products';
import { Filter, ChevronDown } from 'lucide-react';
import  Button  from '../components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/DropdownMenu";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOrder, setSortOrder] = useState('featured');

  const categories = ['all', ...new Set(products.map(product => product.category))];

  const filteredProducts = selectedCategory && selectedCategory !== 'all'
    ? products.filter(product => product.category === selectedCategory)
    : products;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === 'priceLowHigh') {
      return a.price - b.price;
    } else if (sortOrder === 'priceHighLow') {
      return b.price - a.price;
    } else if (sortOrder === 'nameAZ') {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === 'nameZA') {
      return b.name.localeCompare(a.name);
    }
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
              <Filter size={20} className="text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category || (category === 'all' && !selectedCategory) ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category === 'all' ? null : category)}
                    className="capitalize"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  Sort by
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>Sort Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={sortOrder} onValueChange={setSortOrder}>
                  <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="priceLowHigh">Price: Low to High</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="priceHighLow">Price: High to Low</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="nameAZ">Name: A to Z</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="nameZA">Name: Z to A</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500">Try changing your filters or check back later for new items.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <ShoppingCart />
    </div>
  );
};

export default Products;
