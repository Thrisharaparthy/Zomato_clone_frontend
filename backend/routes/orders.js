const express = require('express');
const router = express.Router();

// Get all orders
router.get('/', (req, res) => {
  try {
    const mockOrders = [
      {
        id: 1,
        orderNumber: 'ORD-2024-001',
        userId: 101,
        userName: 'John Doe',
        items: [
          {
            id: 1,
            name: 'Margherita Pizza',
            quantity: 2,
            price: 12.99,
            total: 25.98
          },
          {
            id: 15,
            name: 'Fresh Lemonade',
            quantity: 2,
            price: 3.99,
            total: 7.98
          }
        ],
        subtotal: 33.96,
        tax: 2.71,
        deliveryFee: 5.00,
        total: 41.67,
        status: 'delivered',
        paymentMethod: 'credit_card',
        deliveryAddress: '123 Main St, New York, NY 10001',
        createdAt: '2024-01-15T10:30:00Z',
        updatedAt: '2024-01-15T11:15:00Z'
      },
      {
        id: 2,
        orderNumber: 'ORD-2024-002',
        userId: 102,
        userName: 'Jane Smith',
        items: [
          {
            id: 4,
            name: 'Classic Burger',
            quantity: 1,
            price: 10.99,
            total: 10.99
          }
        ],
        subtotal: 10.99,
        tax: 0.88,
        deliveryFee: 5.00,
        total: 16.87,
        status: 'processing',
        paymentMethod: 'wallet',
        deliveryAddress: '456 Oak St, New York, NY 10002',
        createdAt: '2024-01-16T14:20:00Z',
        updatedAt: '2024-01-16T14:20:00Z'
      }
    ];

    res.json({
      success: true,
      message: 'Orders retrieved successfully',
      data: mockOrders
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve orders',
      error: error.message
    });
  }
});

// Create new order
router.post('/', (req, res) => {
  try {
    const { items, deliveryAddress, paymentMethod } = req.body;

    // Validate required fields
    if (!items || !items.length || !deliveryAddress || !paymentMethod) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields',
        requiredFields: ['items', 'deliveryAddress', 'paymentMethod']
      });
    }

    // Validate payment method
    const validPaymentMethods = ['credit_card', 'debit_card', 'wallet', 'cod'];
    if (!validPaymentMethods.includes(paymentMethod)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid payment method',
        validPaymentMethods
      });
    }

    // Calculate order totals
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08; // 8% tax
    const deliveryFee = 5.00;
    const total = subtotal + tax + deliveryFee;

    const newOrder = {
      id: Date.now(),
      orderNumber: `ORD-${Date.now()}`,
      userId: 101, // Mock user ID
      userName: 'John Doe', // Mock user name
      items,
      subtotal,
      tax,
      deliveryFee,
      total,
      status: 'pending',
      paymentMethod,
      deliveryAddress,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: newOrder
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create order',
      error: error.message
    });
  }
});

// Get order by ID
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;

    const mockOrder = {
      id: parseInt(id),
      orderNumber: `ORD-2024-00${id}`,
      userId: 101,
      userName: 'John Doe',
      items: [
        {
          id: 1,
          name: 'Margherita Pizza',
          quantity: 2,
          price: 12.99,
          total: 25.98
        }
      ],
      subtotal: 25.98,
      tax: 2.08,
      deliveryFee: 5.00,
      total: 33.06,
      status: 'processing',
      paymentMethod: 'credit_card',
      deliveryAddress: '123 Main St, New York, NY 10001',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      estimatedDeliveryTime: '30-45 minutes',
      deliveryPartner: {
        name: 'Mike Johnson',
        phone: '555-0123',
        vehicleNumber: 'NY1234'
      }
    };

    res.json({
      success: true,
      message: 'Order retrieved successfully',
      data: mockOrder
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve order',
      error: error.message
    });
  }
});

// Update order status
router.put('/:id/status', (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Validate status
    const validStatuses = ['pending', 'confirmed', 'preparing', 'ready', 'out_for_delivery', 'delivered', 'cancelled'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid order status',
        validStatuses
      });
    }

    const updatedOrder = {
      id: parseInt(id),
      status,
      updatedAt: new Date().toISOString(),
      statusHistory: [
        {
          status,
          timestamp: new Date().toISOString(),
          note: `Order ${status}`
        }
      ]
    };

    res.json({
      success: true,
      message: 'Order status updated successfully',
      data: updatedOrder
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update order status',
      error: error.message
    });
  }
});

// Cancel order
router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { reason } = req.body;

    if (!reason) {
      return res.status(400).json({
        success: false,
        message: 'Cancellation reason is required'
      });
    }

    res.json({
      success: true,
      message: 'Order cancelled successfully',
      data: {
        id: parseInt(id),
        status: 'cancelled',
        cancelledAt: new Date().toISOString(),
        reason,
        refundStatus: 'processing'
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to cancel order',
      error: error.message
    });
  }
});

module.exports = router;