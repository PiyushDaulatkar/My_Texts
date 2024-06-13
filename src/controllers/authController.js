// controllers/authController.js
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Product from '../models/Product.js';


const users = []; // In-memory user storage
let products = []; // In-memory product storage

function login(req, res) {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }
  console.log(users);
  const token = jwt.sign({ username: user.username }, 'secret', { expiresIn: '1h' });
  res.json({ token });
}




function register(req, res) {
    const { username, password } = req.body;
    // Check if the username is already taken
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
      return res.status(400).json({ message: "Username is already taken" });
    }
  
    // Create a new User instance with the provided username, password, and an empty cart
    const newUser = new User(username, password);
  
    // Add the new user to the users array
    users.push(newUser);
  
    // Generate a JWT token for the newly registered user
    const token = jwt.sign({ username: newUser.username }, 'secret', { expiresIn: '1h' });
    res.json({ token });
  }
  

  // Function to add a new product
function addProduct(req, res) {
    const { name, price } = req.body;
    const id = products.length + 1; // Generate a unique ID for the product
    const newProduct = new Product(id, name, price);
    products.push(newProduct);
    console.log(products);
    res.status(201).json(newProduct);
  }

  // Function to view all products
function viewProducts(req, res) {
    res.json(products);
  }

  // Function to add a product to the user's cart
function addToCart(req, res) {
    const productId = req.params.id;
    const product = products.find(p => p.id === parseInt(productId));
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
  
    // Check if the user is authenticated
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'secret');
    const username = decoded.username;
  
    // Find the user and add the product to their cart
    const user = users.find(u => u.username === username);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.cart.push(product);
  
    res.json({ message: "Product added to cart successfully" });
  }
  

  // Function to view products in the user's cart
  function viewCart(req, res) {
    // Check if the user is authenticated
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'secret');
    const username = decoded.username;
  
    // Find the user and return their cart
    const user = users.find(u => u.username === username);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
  
    res.json(user.cart);
  }
  
  function buyProduct(req, res) {
    const productId = req.params.id;
    const product = products.find(p => p.id === parseInt(productId));
    console.log(productId);
    console.log(product);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    
    // Check if the user is authenticated
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'secret');
    const username = decoded.username;
    console.log(users);
    // Implement buying logic: Add product to the user's cart or process payment
    // For simplicity, let's assume we're just adding the product to the user's cart
    const user = users.find(u => u.username === username);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!user.cart) {
        user.cart = [];
      }
    // Implement buying logic: Add product to the user's cart or process payment
    // For simplicity, let's assume we're just adding the product to the user's cart
    user.cart.push(product);

    res.json({ message: "Product added to cart successfully" });
  }

  // Function to buy products in the user's cart
function buyCart(req, res) {
    // Check if the user is authenticated
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'secret');
    const username = decoded.username;
  
    // Find the user and their cart
    const user = users.find(u => u.username === username);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
  
    if (user.cart.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }
  
    // Implement buying logic for each product in the cart
    // For simplicity, let's assume we're just processing the payment
    // You can replace this with your actual logic
    // Clear the cart after processing the purchase
    user.cart = [];
    
    res.json({ message: "Purchase completed successfully" });
  }
  
  export { login, register, addProduct, viewProducts, viewCart, addToCart , buyProduct, buyCart};

