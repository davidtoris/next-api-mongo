// const mongoose = require('mongoose');
import mongoose from 'mongoose';

const connectBD = async () => {
  try {
    await mongoose.connect('mongodb+srv://ecommerce_mern:bs2HOkLqGNxHXQqE@cluster0.owksl.mongodb.net/store');
    console.log('DB Conected');
  } catch (error) {
    console.log(error);
  }
}

export default connectBD;