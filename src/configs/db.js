const mongoose = require("mongoose");

module.exports = () => {
  mongoose.connect(
    // "mongodb+srv://Kamal_kishor_rajput:Rajput_01@cluster0.bd1r4.mongodb.net/todos?retryWrites=true&w=majority"
    "mongodb://127.0.0.1:27017/todos"
  );
};
