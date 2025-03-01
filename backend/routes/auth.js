const express = require('express');
const router = express.Router();

// User Registration
router.post('/register', (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // Basic validation
    if (!name || !email || !password || !phone) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
        requiredFields: ['name', 'email', 'password', 'phone']
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Password strength validation
    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 8 characters long'
      });
    }

    // Mock successful registration
    res.status(201).json({
      success: true,
      message: 'Registration successful',
      data: {
        id: Date.now(),
        name,
        email,
        phone,
        createdAt: new Date().toISOString()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Registration failed',
      error: error.message
    });
  }
});

// User Login
router.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
    }

    // Mock successful login
    res.json({
      success: true,
      message: 'Login successful',
      data: {
        token: 'mock-jwt-token-' + Date.now(),
        user: {
          id: 1,
          name: 'John Doe',
          email: email,
          role: 'user'
        },
        expiresIn: '24h'
      }
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Login failed',
      error: error.message
    });
  }
});

// User Logout
router.post('/logout', (req, res) => {
  try {
    // Check for auth token
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: 'No authentication token provided'
      });
    }

    res.json({
      success: true,
      message: 'Logout successful',
      data: {
        logoutTime: new Date().toISOString()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Logout failed',
      error: error.message
    });
  }
});

// Password Reset Request
router.post('/forgot-password', (req, res) => {
  try {
    const { email } = req.body;

    // Basic validation
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Mock password reset
    res.json({
      success: true,
      message: 'Password reset instructions sent',
      data: {
        resetToken: 'mock-reset-token-' + Date.now(),
        expiresIn: '1h',
        email: email
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Password reset request failed',
      error: error.message
    });
  }
});

// Reset Password
router.post('/reset-password', (req, res) => {
  try {
    const { resetToken, newPassword, confirmPassword } = req.body;

    // Basic validation
    if (!resetToken || !newPassword || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
        requiredFields: ['resetToken', 'newPassword', 'confirmPassword']
      });
    }

    // Password match validation
    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: 'Passwords do not match'
      });
    }

    // Password strength validation
    if (newPassword.length < 8) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 8 characters long'
      });
    }

    res.json({
      success: true,
      message: 'Password reset successful',
      data: {
        updatedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Password reset failed',
      error: error.message
    });
  }
});

module.exports = router;