const Product = require('../models/product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ ProductStoreCode: -1, ProductCode: -1 });
    res.render('listProduct', { products: products });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getNewProductForm = (req, res) => {
  res.render('new');
};

exports.createProduct = async (req, res) => {
  const { ProductCode, ProductName, ProductDate, ProductOriginPrice, Quantity, ProductStoreCode } = req.body;

  try {
    const newProduct = new Product({
      ProductCode,
      ProductName,
      ProductDate,
      ProductOriginPrice,
      Quantity,
      ProductStoreCode
    });

    await newProduct.save();
    res.redirect('/products');
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect('/products');
  } catch (err) {
    res.status(400).send(err.message);
  }
};
