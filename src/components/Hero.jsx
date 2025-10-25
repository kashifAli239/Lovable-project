import React from "react";
import { Link } from "react-router-dom";
import  Button  from "./ui/button"; // Ensure this is correctly imported

const Hero = () => {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Discover Quality Products for Modern Living
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Browse our curated collection of premium products designed to enhance your everyday experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/products">Explore Collections</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary to-accent blur-lg opacity-30 z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Featured Products"
                className="relative z-10 rounded-lg shadow-lg w-full h-auto object-cover max-w-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
