const mongoose = require("mongoose");

const url = process.env.MONGODB_URL;

console.log("connected to", url);

mongoose
  .connect(url)
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting:", error.message);
  });

const person = new mongoose.Schema({
  name: String,
  number: String,
});

person.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Person", person);
