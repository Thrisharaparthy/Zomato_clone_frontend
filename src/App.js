import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import SearchSection from './components/SearchSection';
import RecipeGrid from './components/RecipeGrid';
import RecipeDetail from './components/RecipeDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Menu from './components/Menu';


  // ... your existing menu items array ...
  
// ... imports remain the same ...
const sampleMenuItems = [
  {
    id: 1,
    name: "Chicken Biryani",
    description: "Aromatic basmati rice cooked with tender chicken and exotic spices",
    price: 16.99,
    category: "Main Course",
    image: "https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg",
    isVegetarian: false,
    spicyLevel: "Hot",
    rating: 4.7
  },
  {
    id: 2,
    name: "Classic Burger",
    description: "Juicy beef patty with fresh lettuce, tomatoes, and special sauce",
    price: 12.99,
    category: "Fast Food",
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
    isVegetarian: false,
    spicyLevel: "Mild",
    rating: 4.4
  },
  {
    id: 3,
    name: "Butter Chicken",
    description: "Tender chicken in rich buttery tomato sauce",
    price: 15.99,
    category: "Main Course",
    image: "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg",
    isVegetarian: false,
    spicyLevel: "Medium",
    rating: 4.6
  },
  {
    id: 4,
    name: "Chocolate Cake",
    description: "Rich chocolate layers with creamy frosting",
    price: 8.99,
    category: "Desserts",
    image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
    isVegetarian: true,
    spicyLevel: "None",
    rating: 4.8
  },
  {
    id: 5,
    name: "Fish & Chips",
    description: "Crispy battered fish served with golden fries",
    price: 14.99,
    category: "Main Course",
    image: "https://images.pexels.com/photos/4193843/pexels-photo-4193843.jpeg",
    isVegetarian: false,
    spicyLevel: "Mild",
    rating: 4.3
  },
  {
    id: 6,
    name: "Pad Thai",
    description: "Stir-fried rice noodles with shrimp, tofu, and peanuts",
    price: 13.99,
    category: "Asian",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    isVegetarian: false,
    spicyLevel: "Medium",
    rating: 4.5
  },
  {
    id: 7,
    name: "Margherita Pizza",
    description: "Fresh tomatoes, mozzarella, basil, and olive oil",
    price: 14.99,
    category: "Pizza",
    image: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg",
    isVegetarian: true,
    spicyLevel: "Mild",
    rating: 4.6
  },
  {
    id: 8,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, croutons, parmesan, and Caesar dressing",
    price: 10.99,
    category: "Salads",
    image: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg",
    isVegetarian: false,
    spicyLevel: "None",
    rating: 4.3
  },
  {
    id: 9,
    name: "Sushi Roll Platter",
    description: "Assorted fresh sushi rolls with wasabi and ginger",
    price: 22.99,
    category: "Japanese",
    image: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg",
    isVegetarian: false,
    spicyLevel: "Medium",
    rating: 4.8
  },
  {
    id: 10,
    name: "Mushroom Risotto",
    description: "Creamy Italian rice with wild mushrooms and parmesan",
    price: 16.99,
    category: "Italian",
    image: "https://images.pexels.com/photos/5638527/pexels-photo-5638527.jpeg",
    isVegetarian: true,
    spicyLevel: "None",
    rating: 4.5
  },
  {
    id: 11,
    name: "Beef Tacos",
    description: "Seasoned ground beef with fresh toppings in corn tortillas",
    price: 12.99,
    category: "Mexican",
    image: "https://images.pexels.com/photos/2092507/pexels-photo-2092507.jpeg",
    isVegetarian: false,
    spicyLevel: "Medium",
    rating: 4.6
  },
  {
    id: 12,
    name: "Green Curry",
    description: "Thai green curry with coconut milk and vegetables",
    price: 14.99,
    category: "Asian",
    image: "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg",
    isVegetarian: true,
    spicyLevel: "Hot",
    rating: 4.7
  },
  // ... existing menu items ...
  
    
// ... rest of menu items ...
  {
    id: 14,
    name: "BBQ Ribs",
    description: "Tender pork ribs with smoky BBQ sauce",
    price: 19.99,
    category: "Main Course",
    image: "https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg",
    isVegetarian: false,
    spicyLevel: "Mild",
    rating: 4.7
  },
  {
    id: 15,
    name: "Falafel Wrap",
    description: "Crispy falafel with tahini sauce and fresh vegetables",
    price: 11.99,
    category: "Mediterranean",
    image: "https://images.pexels.com/photos/1618955/pexels-photo-1618955.jpeg",
    isVegetarian: true,
    spicyLevel: "Mild",
    rating: 4.4
  },
  {
    id: 16,
    name: "Seafood Paella",
    description: "Spanish rice dish with assorted seafood and saffron",
    price: 24.99,
    category: "Spanish",
    image: "https://images.pexels.com/photos/4193843/pexels-photo-4193843.jpeg",
    isVegetarian: false,
    spicyLevel: "Medium",
    rating: 4.8
  },
  {
    id: 17,
    name: "Chicken Wings",
    description: "Crispy wings with choice of sauce",
    price: 13.99,
    category: "Appetizers",
    image: "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg",
    isVegetarian: false,
    spicyLevel: "Hot",
    rating: 4.5
  },
  {
    id: 18,
    name: "Greek Salad",
    description: "Fresh vegetables with feta cheese and olives",
    price: 11.99,
    category: "Salads",
    image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg",
    isVegetarian: true,
    spicyLevel: "None",
    rating: 4.3
  },
  {
    id: 19,
    name: "Ice Cream Sundae",
    description: "Vanilla ice cream with hot fudge and toppings",
    price: 7.99,
    category: "Desserts",
    image: "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg",
    isVegetarian: true,
    spicyLevel: "None",
    rating: 4.6
  },
  {
    id: 20,
    name: "Ramen Noodles",
    description: "Japanese noodle soup with pork and soft-boiled egg",
    price: 15.99,
    category: "Japanese",
    image: "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg",
    isVegetarian: false,
    spicyLevel: "Medium",
    rating: 4.7
  }
];


// ... existing imports ...
const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://food-zone-mu.vercel.app/api'
  : 'http://localhost:5002/api';




const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isLoggedIn') === 'true'
  );

  useEffect(() => {
    const loadMenuItems = async () => {
      try {
        // Simulating API call with setTimeout
        setTimeout(() => {
          setMenuItems(sampleMenuItems);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to load menu items');
        setLoading(false);
      }
    };

    loadMenuItems();
  }, []);

  const handleSearch = (query) => {
    const filtered = menuItems.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered);
  };

  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
          <SearchSection onSearch={handleSearch} />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={
                <Menu 
                  items={menuItems} 
                  loading={loading} 
                  error={error}
                />
              } />
              <Route path="/login" element={
                <Login setIsAuthenticated={setIsAuthenticated} />
              } />
              <Route path="/register" element={<Register />} />
              <Route path="/recipe/:id" element={
                <RecipeDetail 
                  menuItems={menuItems} 
                />
              } />
              <Route path="/cart" element={
                <Cart isAuthenticated={isAuthenticated} />
              } />
              <Route path="/checkout" element={
                <PrivateRoute>
                  <Checkout />
                </PrivateRoute>
              } />
              <Route path="/order-confirmation" element={
                <PrivateRoute>
                  <OrderConfirmation />
                </PrivateRoute>
              } />
              <Route path="/search" element={
                <SearchResults 
                  results={searchResults}
                  loading={loading}
                  error={error}
                />
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;