const express = require('express');
const router = express.Router();

// Get all feedback
router.get('/', (req, res) => {
  try {
    const mockFeedback = [
      {
        id: 1,
        userId: 101,
        userName: 'John Doe',
        orderId: 'ORD-2024-001',
        rating: 5,
        comment: 'Excellent food and quick delivery!',
        type: 'delivery',
        createdAt: '2024-01-15T10:30:00Z',
        status: 'published',
        response: 'Thank you for your positive feedback!'
      },
      {
        id: 2,
        userId: 102,
        userName: 'Jane Smith',
        orderId: 'ORD-2024-002',
        rating: 4,
        comment: 'Food was great but delivery was slightly delayed',
        type: 'food',
        createdAt: '2024-01-16T15:45:00Z',
        status: 'pending',
        response: null
      }
    ];

    res.json({
      success: true,
      message: 'Feedback retrieved successfully',
      data: mockFeedback
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve feedback',
      error: error.message
    });
  }
});

// Submit new feedback
router.post('/', (req, res) => {
  try {
    const { orderId, rating, comment, type } = req.body;

    // Validate required fields
    if (!orderId || !rating || !comment || !type) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
        requiredFields: ['orderId', 'rating', 'comment', 'type']
      });
    }

    // Validate rating
    if (rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        message: 'Rating must be between 1 and 5'
      });
    }

    // Validate feedback type
    const validTypes = ['food', 'delivery', 'service', 'app'];
    if (!validTypes.includes(type)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid feedback type',
        validTypes
      });
    }

    const newFeedback = {
      id: Date.now(),
      userId: 101, // Mock user ID
      userName: 'John Doe', // Mock user name
      orderId,
      rating,
      comment,
      type,
      createdAt: new Date().toISOString(),
      status: 'pending',
      response: null
    };

    res.status(201).json({
      success: true,
      message: 'Feedback submitted successfully',
      data: newFeedback
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to submit feedback',
      error: error.message
    });
  }
});

// Get feedback by ID
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;

    const mockFeedback = {
      id: parseInt(id),
      userId: 101,
      userName: 'John Doe',
      orderId: 'ORD-2024-001',
      rating: 5,
      comment: 'Excellent food and quick delivery!',
      type: 'delivery',
      createdAt: '2024-01-15T10:30:00Z',
      status: 'published',
      response: 'Thank you for your positive feedback!',
      order: {
        items: ['Margherita Pizza', 'Coca Cola'],
        total: 18.99,
        deliveryTime: '30 minutes'
      }
    };

    res.json({
      success: true,
      message: 'Feedback retrieved successfully',
      data: mockFeedback
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve feedback',
      error: error.message
    });
  }
});

// Update feedback response
router.put('/:id/respond', (req, res) => {
  try {
    const { id } = req.params;
    const { response } = req.body;

    // Validate response
    if (!response || response.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Response cannot be empty'
      });
    }

    const updatedFeedback = {
      id: parseInt(id),
      userId: 101,
      userName: 'John Doe',
      orderId: 'ORD-2024-001',
      rating: 5,
      comment: 'Excellent food and quick delivery!',
      type: 'delivery',
      createdAt: '2024-01-15T10:30:00Z',
      status: 'responded',
      response: response,
      respondedAt: new Date().toISOString()
    };

    res.json({
      success: true,
      message: 'Feedback response updated successfully',
      data: updatedFeedback
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update feedback response',
      error: error.message
    });
  }
});

// Delete feedback
router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;

    res.json({
      success: true,
      message: 'Feedback deleted successfully',
      data: {
        id: parseInt(id),
        deletedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete feedback',
      error: error.message
    });
  }
});

module.exports = router;