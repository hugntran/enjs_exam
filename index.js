const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const connectDB = require('./models/database');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Connect to MongoDB
connectDB();

// Routes
app.use('/products', productRoutes);

// Start server
const PORT = process.env.PORT || 2305;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
