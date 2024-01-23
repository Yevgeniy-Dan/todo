const { mongoUri } = require("./config");

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(mongoUri);

    console.log(
      `MongoDB Connected: ${connection.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
