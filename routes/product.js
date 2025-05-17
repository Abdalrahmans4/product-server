import express from 'express';
const router = express.Router();


let products = [
  {
    id: 1,
    name: 'Phone',
    price: 100,
    description: 'IPHONE 14',
  },
  {
    id: 2,
    name: 'LAPTOP',
    price: 200,
    description: 'Lenovo',
  },
];

// Get all products
router.get('/', (req, res) => {
  res.json(products);
});
// Get a single product by ID
router.get('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});
// Create a new product 
router.post('/', (req, res) => {
  const { name, price, description } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    price,
    description,
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});
// Update a product by ID
router.put('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === productId);
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  const { name, price, description } = req.body;
  products[productIndex] = { id: productId, name, price, description };
  res.json(products[productIndex]);
});
// Delete a product by ID
router.delete('/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const productIndex = products.findIndex((p) => p.id === productId);
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }
  products.splice(productIndex, 1);
  res.status(204).send();
});
export default router;