import React from "react";
import Navbar from "../components/Navbar"; // Ensure the correct path
import Hero from "../components/Hero"; // Import the Hero component
import Footer from "../components/Footer"; // Ensure the correct path

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero /> {/* Rendering the Hero section */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
