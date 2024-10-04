const mongoose = require('mongoose');

const DBconnection = async () => {
  let DB_URL = process.env.MONGODB_URL;
 
  try {
    await mongoose.connect(DB_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error", error);
  }
};

module.exports = DBconnection;
