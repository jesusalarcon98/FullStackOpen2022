const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const url = process.env.MONGODB_URL;
console.log("connected to", url);

mongoose
  .connect(url)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting:", error.message);
  });

const person = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    minLength: [3, "Must be at least 3, got '{VALUE}'"],
  },
  number: { type: String, minLength: [8, "Must be at least 8, got '{VALUE}'"] },
});

person.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

person.plugin(uniqueValidator, {
  message: "Error, expected {PATH} to be unique.",
});

module.exports = mongoose.model("Person", person);
