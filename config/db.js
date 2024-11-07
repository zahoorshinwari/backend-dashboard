

const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connectDB = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas', error);
    process.exit(1);
  }
};

// Define multiple database functions
const getAuthDB = () => client.db('auth');
const getCustomerDB = () => client.db('customer'); // New database function

module.exports = { connectDB, getAuthDB, getCustomerDB };
