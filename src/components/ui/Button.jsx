import React from "react";

const Button = ({ children, variant = "default", size = "default", className = "", ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50";
  
  const variantStyles = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    ghost: "text-gray-700 hover:bg-gray-100",
    link: "text-blue-600 underline hover:text-blue-800"
  };

  const sizeStyles = {
    default: "px-4 py-2",
    sm: "px-3 py-1 text-sm",
    lg: "px-6 py-3 text-lg",
    icon: "p-2"
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
