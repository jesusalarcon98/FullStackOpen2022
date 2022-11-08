const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(`please provide node mongo.js <Password> <Name> and <Number>`);
  process.exit(1);
}

const password = process.argv[2];
//const url = YourURL

mongoose.connect(url);

const person = new mongoose.Schema({
  name: String,
  number: String,
});
const Person = mongoose.model("Person", person);

if (process.argv.length > 3) {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  });
  person.save().then((result) => {
    console.log(`added ${person.name} number ${person.number} to phonebook`);
    mongoose.connection.close();
  });
} else {
  Person.find().then((result) => {
    result.forEach((person) => {
      console.log(`${person.name} ${person.number}`);
    });
    mongoose.connection.close();
  });
}
