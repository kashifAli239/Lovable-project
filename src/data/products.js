export const products = [
    {
      id: 1,
      name: "Modern Minimalist Desk Lamp",
      price: 89.99,
      description: "An elegant desk lamp with adjustable brightness and a sleek, modern design. Perfect for your home office or bedside table.",
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "home",
      featured: true
    },
    {
      id: 2,
      name: "Premium Wireless Headphones",
      price: 199.99,
      description: "Experience superior sound quality with these noise-cancelling wireless headphones. Features 30-hour battery life and comfortable ear cushions.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "electronics",
      featured: true
    },
    {
      id: 3,
      name: "Handcrafted Ceramic Mug Set",
      price: 49.99,
      description: "Set of 4 artisanal ceramic mugs, each uniquely designed. Microwave and dishwasher safe with a comfortable handle grip.",
      image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "kitchen",
      featured: true
    },
    {
      id: 4,
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      description: "Ultra-soft organic cotton t-shirt with a relaxed fit. Sustainably produced with eco-friendly dyes.",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "clothing",
      featured: false
    },
    {
      id: 5,
      name: "Smart Digital Assistant",
      price: 129.99,
      description: "Voice-activated smart assistant that helps manage your schedule, play music, and control your smart home devices.",
      image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "electronics",
      featured: true
    },
    {
      id: 6,
      name: "Leather Crossbody Bag",
      price: 159.99,
      description: "Genuine leather crossbody bag with multiple pockets and adjustable strap. Perfect for everyday use.",
      image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "accessories",
      featured: false
    },
    {
      id: 7,
      name: "Bamboo Bath Towel Set",
      price: 79.99,
      description: "Luxuriously soft bamboo towel set including 2 bath towels, 2 hand towels, and 2 washcloths. Quick-drying and antibacterial.",
      image: "https://images.unsplash.com/photo-1600369672770-985fd30004eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "home",
      featured: false
    },
    {
      id: 8,
      name: "Stainless Steel Water Bottle",
      price: 35.99,
      description: "Double-walled, vacuum-insulated water bottle that keeps beverages cold for 24 hours or hot for 12 hours.",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "kitchen",
      featured: false
    }
  ];
  
  export const getProductById = (id) => {
    return products.find((product) => product.id === id);
  };
  
  export const getProductsByCategory = (category) => {
    return products.filter((product) => product.category === category);
  };
  
  export const getFeaturedProducts = () => {
    return products.filter((product) => product.featured);
  };
  