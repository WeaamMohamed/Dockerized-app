const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');

// Init app
const PORT = process.env.PORT || 4000;
const app = express();

// Connect to Redis
const redisClient = redis.createClient({ url: 'redis://redis:6379' });
redisClient.on('error', (err) => console.log('Redis Client Error', err));
redisClient.on('connect', () => console.log('Connected to Redis...'));
redisClient.connect();

// Connect to MongoDB
mongoose.connect('mongodb://root:example@mongo:27017')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB', error));

// Routes
app.get('/', async (req, res) => {
  try {
    await redisClient.set('products', 'products....');
    res.send('<h1>Last Update</h1>');
  } catch (err) {
    console.error('Redis set error:', err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/data', async (req, res) => {
  try {
    const products = await redisClient.get('products');
    res.send(`<h1>Last Update</h1> <h2>${products}</h2>`);
  } catch (err) {
    console.error('Redis get error:', err);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(PORT, () => console.log('App is up and running on port ' + PORT));