const express = require('express');
const router = express.Router();

// Get all menu items


// Define menu items array
const menuItems = [
  {
    id: 1,
    name: 'Margherita Pizza',
    description: 'Fresh tomatoes, mozzarella, basil',
    price: 12.99,
    category: 'Pizza',
    image: '/images/margherita.jpg',
    isAvailable: true,
    isVegetarian: true,
    spicyLevel: 0
  },
  {
    id: 2,
    name: 'Pepperoni Pizza',
    description: 'Classic pepperoni with extra cheese',
    price: 14.99,
    category: 'Pizza',
    image: '/images/pepperoni-pizza.jpg',
    isAvailable: true,
    isVegetarian: false,
    spicyLevel: 1
  },
  {
    id: 3,
    name: 'BBQ Chicken Pizza',
    description: 'Grilled chicken, BBQ sauce, red onions',
    price: 15.99,
    category: 'Pizza',
    image: '/images/bbq-chicken-pizza.jpg',
    isAvailable: true,
    isVegetarian: false,
    spicyLevel: 1
  },
  {
    id: 4,
    name: 'Classic Burger',
    description: 'Beef patty, cheese, lettuce, tomato',
    price: 10.99,
    category: 'Burgers',
    image: '/images/classic-burger.jpg',
    isAvailable: true,
    isVegetarian: false,
    spicyLevel: 0
  },
  {
    id: 5,
    name: 'Chicken Burger',
    description: 'Grilled chicken, lettuce, special sauce',
    price: 9.99,
    category: 'Burgers',
    image: '/images/chicken-burger.jpg',
    isAvailable: true,
    isVegetarian: false,
    spicyLevel: 1
  },
  {
    id: 6,
    name: 'Veggie Burger',
    description: 'Plant-based patty with fresh veggies',
    price: 11.99,
    category: 'Burgers',
    image: '/images/veggie-burger.jpg',
    isAvailable: true,
    isVegetarian: true,
    spicyLevel: 0
  },
  {
    id: 7,
    name: 'Pasta Alfredo',
    description: 'Creamy sauce, parmesan, garlic bread',
    price: 14.99,
    category: 'Pasta',
    image: '/images/pasta-alfredo.jpg',
    isAvailable: true,
    isVegetarian: true,
    spicyLevel: 0
  },
  {
    id: 8,
    name: 'Spaghetti Bolognese',
    description: 'Classic meat sauce with herbs',
    price: 13.99,
    category: 'Pasta',
    image: '/images/spaghetti.jpg',
    isAvailable: true,
    isVegetarian: false,
    spicyLevel: 0
  },
  {
    id: 9,
    name: 'Spicy Wings',
    description: 'Hot buffalo wings with blue cheese dip',
    price: 11.99,
    category: 'Appetizers',
    image: '/images/spicy-wings.jpg',
    isAvailable: true,
    isVegetarian: false,
    spicyLevel: 3
  },
  {
    id: 10,
    name: 'Mozzarella Sticks',
    description: 'Crispy outside, melty inside',
    price: 7.99,
    category: 'Appetizers',
    image: '/images/mozzarella-sticks.jpg',
    isAvailable: true,
    isVegetarian: true,
    spicyLevel: 0
  },
  {
    id: 11,
    name: 'Caesar Salad',
    description: 'Romaine, croutons, parmesan',
    price: 8.99,
    category: 'Salads',
    image: '/images/caesar-salad.jpg',
    isAvailable: true,
    isVegetarian: true,
    spicyLevel: 0
  },
  {
    id: 12,
    name: 'Greek Salad',
    description: 'Feta, olives, cucumber, tomatoes',
    price: 9.99,
    category: 'Salads',
    image: '/images/greek-salad.jpg',
    isAvailable: true,
    isVegetarian: true,
    spicyLevel: 0
  },
  {
    id: 13,
    name: 'Chocolate Brownie',
    description: 'Warm brownie with ice cream',
    price: 6.99,
    category: 'Desserts',
    image: '/images/brownie.jpg',
    isAvailable: true,
    isVegetarian: true,
    spicyLevel: 0
  },
  {
    id: 14,
    name: 'Cheesecake',
    description: 'New York style with berry compote',
    price: 7.99,
    category: 'Desserts',
    image: '/images/cheesecake.jpg',
    isAvailable: true,
    isVegetarian: true,
    spicyLevel: 0
  },
  {
    id: 15,
    name: 'Fresh Lemonade',
    description: 'Freshly squeezed with mint',
    price: 3.99,
    category: 'Beverages',
    image: '/images/lemonade.jpg',
    isAvailable: true,
    isVegetarian: true,
    spicyLevel: 0
  },
  {
    id: 16,
    name: 'Iced Tea',
    description: 'House-brewed black tea',
    price: 3.49,
    category: 'Beverages',
    image: '/images/iced-tea.jpg',
    isAvailable: true,
    isVegetarian: true,
    spicyLevel: 0
  },
  {
    id: 17,
    name: 'Garlic Bread',
    description: 'Toasted with herbs and butter',
    price: 4.99,
    category: 'Appetizers',
    image: '/images/garlic-bread.jpg',
    isAvailable: true,
    isVegetarian: true,
    spicyLevel: 0
  },
  {
    id: 18,
    name: 'Tiramisu',
    description: 'Classic Italian coffee dessert',
    price: 8.99,
    category: 'Desserts',
    image: '/images/tiramisu.jpg',
    isAvailable: true,
    isVegetarian: true,
    spicyLevel: 0
  },
  {
    id: 19,
    name: 'Chicken Pesto Pasta',
    description: 'Grilled chicken with basil pesto',
    price: 15.99,
    category: 'Pasta',
    image: '/images/pesto-pasta.jpg',
    isAvailable: true,
    isVegetarian: false,
    spicyLevel: 0
  },
  {
    id: 20,
    name: 'Supreme Pizza',
    description: 'Loaded with veggies and meats',
    price: 16.99,
    category: 'Pizza',
    image: '/images/supreme-pizza.jpg',
    isAvailable: true,
    isVegetarian: false,
    spicyLevel: 2
  }
];

// Rest of your existing route handlers...
router.get('/', (req, res) => {
  try {
    // ... existing menu items array ...

    // Add filtering capabilities
    const { category, isVegetarian, spicyLevel, maxPrice } = req.query;
    let filteredItems = [...menuItems];

    if (category) {
      filteredItems = filteredItems.filter(item => item.category === category);
    }

    if (isVegetarian === 'true') {
      filteredItems = filteredItems.filter(item => item.isVegetarian);
    }

    if (spicyLevel) {
      filteredItems = filteredItems.filter(item => item.spicyLevel <= parseInt(spicyLevel));
    }

    if (maxPrice) {
      filteredItems = filteredItems.filter(item => item.price <= parseFloat(maxPrice));
    }

    res.json({
      success: true,
      message: 'Menu items retrieved successfully',
      data: filteredItems,
      categories: [
        'Pizza',
        'Burgers',
        'Pasta',
        'Appetizers',
        'Salads',
        'Beverages',
        'Desserts'
      ]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve menu items',
      error: error.message
    });
  }
});

// Get menu item by ID
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const menuItem = menuItems.find(item => item.id === parseInt(id));

    if (!menuItem) {
      return res.status(404).json({
        success: false,
        message: 'Menu item not found'
      });
    }

    res.json({
      success: true,
      message: 'Menu item retrieved successfully',
      data: menuItem
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve menu item',
      error: error.message
    });
  }
});

// Get menu items by category
router.get('/category/:category', (req, res) => {
  try {
    const { category } = req.params;
    const categoryItems = menuItems.filter(item => 
      item.category.toLowerCase() === category.toLowerCase()
    );

    if (!categoryItems.length) {
      return res.status(404).json({
        success: false,
        message: 'No items found in this category'
      });
    }

    res.json({
      success: true,
      message: `Menu items for category ${category} retrieved successfully`,
      data: categoryItems
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve category items',
      error: error.message
    });
  }
});

// Search menu items
router.get('/search/:query', (req, res) => {
  try {
    const { query } = req.params;
    const searchResults = menuItems.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );

    res.json({
      success: true,
      message: 'Search results retrieved successfully',
      data: searchResults,
      count: searchResults.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to search menu items',
      error: error.message
    });
  }
});

// Get special menu items (e.g., vegetarian, spicy)
router.get('/special/:type', (req, res) => {
  try {
    const { type } = req.params;
    let specialItems = [];

    switch (type.toLowerCase()) {
      case 'vegetarian':
        specialItems = menuItems.filter(item => item.isVegetarian);
        break;
      case 'spicy':
        specialItems = menuItems.filter(item => item.spicyLevel > 0);
        break;
      case 'popular':
        specialItems = menuItems.slice(0, 5); // Mock popular items
        break;
      default:
        return res.status(400).json({
          success: false,
          message: 'Invalid special type',
          validTypes: ['vegetarian', 'spicy', 'popular']
        });
    }

    res.json({
      success: true,
      message: `${type} menu items retrieved successfully`,
      data: specialItems
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve special menu items',
      error: error.message
    });
  }
});

module.exports = router;