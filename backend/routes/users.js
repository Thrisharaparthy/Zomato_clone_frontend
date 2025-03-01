const express = require('express');
const router = express.Router();

// Get user profile
router.get('/profile', (req, res) => {
  try {
    res.json({
      success: true,
      message: 'Profile retrieved successfully',
      data: {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        address: '123 Main Street',
        city: 'New York',
        zipCode: '10001',
        preferences: {
          newsletter: true,
          notifications: true,
          vegetarian: false
        },
        joinedDate: '2024-01-01'
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve profile',
      error: error.message
    });
  }
});

// Update user profile
router.put('/profile', (req, res) => {
  try {
    const { name, email, phone, address, city, zipCode, preferences } = req.body;
    
    // Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and phone are required fields'
      });
    }

    res.json({
      success: true,
      message: 'Profile updated successfully',
      data: {
        id: 1,
        name,
        email,
        phone,
        address,
        city,
        zipCode,
        preferences,
        updatedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update profile',
      error: error.message
    });
  }
});

// Get user orders
router.get('/orders', (req, res) => {
  try {
    res.json({
      success: true,
      message: 'User orders retrieved successfully',
      data: [
        {
          id: 1,
          orderNumber: 'ORD-2024-001',
          date: '2024-01-15T10:30:00Z',
          status: 'delivered',
          total: 45.97,
          items: [
            {
              id: 1,
              name: 'Margherita Pizza',
              quantity: 2,
              price: 12.99
            },
            {
              id: 15,
              name: 'Fresh Lemonade',
              quantity: 2,
              price: 3.99
            }
          ]
        },
        {
          id: 2,
          orderNumber: 'ORD-2024-002',
          date: '2024-01-20T18:45:00Z',
          status: 'processing',
          total: 32.98,
          items: [
            {
              id: 4,
              name: 'Classic Burger',
              quantity: 2,
              price: 10.99
            },
            {
              id: 16,
              name: 'Iced Tea',
              quantity: 2,
              price: 3.49
            }
          ]
        }
      ]
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve user orders',
      error: error.message
    });
  }
});

// Update user password
router.put('/password', (req, res) => {
  try {
    const { currentPassword, newPassword, confirmPassword } = req.body;

    // Validate password requirements
    if (!currentPassword || !newPassword || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: 'All password fields are required'
      });
    }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: 'New password and confirm password do not match'
      });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 8 characters long'
      });
    }

    res.json({
      success: true,
      message: 'Password updated successfully',
      data: {
        updatedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update password',
      error: error.message
    });
  }
});

// Delete user account
router.delete('/account', (req, res) => {
  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({
        success: false,
        message: 'Password is required to delete account'
      });
    }

    res.json({
      success: true,
      message: 'Account deleted successfully',
      data: {
        deletedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete account',
      error: error.message
    });
  }
});

module.exports = router;