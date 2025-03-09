const express = require('express');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

// Import all routes
const menuRouter = require('./routes/menu');
const authRouter = require('./routes/auth');
const ordersRouter = require('./routes/orders');
const feedbackRouter = require('./routes/feedback');
const usersRouter = require('./routes/users');

const app = express();

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: { error: 'Too many requests, please try again later.' }
});

// Middleware
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

// Security Middleware
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
}));

// Updated CORS configuration
// Updated CORS configuration
app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5002',
    'https://food-zone-frontend.vercel.app',
    'https://food-zone-msip7-web3-raparthy-thrishas-projects.vercel.app'  // Add this line
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Apply rate limiting to API routes
app.use('/api', limiter);

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Static files middleware with improved caching
// Static files middleware with improved caching
app.use('/images', express.static(path.join(__dirname, 'public', 'images'), {
  maxAge: '1d',
  etag: true,
  lastModified: true,
  headers: {
    'Cache-Control': 'public, max-age=86400'
  }
}));

// API Routes
app.use('/api/menu', menuRouter);
app.use('/api/auth', authRouter);
app.use('/api/orders', ordersRouter);
app.use('/api/feedback', feedbackRouter);
app.use('/api/users', usersRouter);

// Health Check Route
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Welcome route
// Welcome route
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to Food Zone API",
    version: "1.0",
    status: "Active",
    documentation: "/api-docs",
    endpoints: {
      menu: "/api/menu",
      auth: "/api/auth",
      orders: "/api/orders",
      feedback: "/api/feedback",
      users: "/api/users",
      health: "/health"
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  const errorResponse = {
    error: err.name || 'Internal Server Error',
    message: err.message || 'Something went wrong!',
    status: err.status || 500,
    timestamp: new Date().toISOString(),
    path: req.originalUrl
  };

  if (process.env.NODE_ENV === 'development') {
    errorResponse.stack = err.stack;
  }

  console.error(`[${errorResponse.timestamp}] ${err.stack}`);
  res.status(errorResponse.status).json(errorResponse);
});

// 404 Route
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested resource was not found',
    path: req.originalUrl,
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 5002;
const server = app.listen(PORT, () => {
  console.clear();
  console.log('🚀 Server Details:');
  console.log('------------------');
  console.log(`🌐 URL: http://localhost:${PORT}`);
  console.log(`⏰ Started at: ${new Date().toLocaleString()}`);
  console.log(`🔧 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log('------------------');
});

// Error handling for unhandled rejections
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! Shutting down...');
  console.error(err);
  server.close(() => {
    process.exit(1);
  });
});

// Handle SIGTERM
process.on('SIGTERM', () => {
  console.log('👋 SIGTERM received. Shutting down gracefully');
  server.close(() => {
    console.log('💥 Process terminated!');
  });
});

module.exports = app;