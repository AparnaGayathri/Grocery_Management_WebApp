const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://Aparna:aparna@mongodb12@nmkk.u6tbvwm.mongodb.net/?retryWrites=true&w=majority"
    await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      })
      .catch((error) => console.log(error));
    const connection = mongoose.connection;
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = connectDB;
