import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "./ui/Card";
import  Button  from "./ui/Button";
import { ShoppingBag } from 'lucide-react';
import { useAppDispatch } from '../store/hooks';
import { addToCart } from '../store/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useAppDispatch();

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
      <Link to={`/product/${product.id}`}>
        <div className="h-48 overflow-hidden bg-gray-100">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <div className="mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</span>
        </div>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="font-medium text-gray-900 mb-1 hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="font-semibold text-primary">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full gap-2"
          onClick={() => dispatch(addToCart(product))}
        >
          <ShoppingBag size={16} />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
