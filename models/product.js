const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  ProductCode: {
    type: String,
    required: true,
    unique: true
  },
  ProductName: {
    type: String,
    required: true
  },
  ProductDate: {
    type: Date,
    required: true
  },
  ProductOriginPrice: {
    type: Number,
    required: true,
    validate: {
      validator: function(value) {
        return value > 0;
      },
      message: 'ProductOriginPrice must be greater than 0.'
    }
  },
  Quantity: {
    type: Number,
    required: true,
    validate: {
      validator: function(value) {
        return value >= 0;
      },
      message: 'Quantity must be greater than or equal to 0.'
    }
  },
  ProductStoreCode: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Product', productSchema);
