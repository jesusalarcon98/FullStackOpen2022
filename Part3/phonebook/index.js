const express = require("express");
const app = express();

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
  {
    name: "Jesús Alarcón",
    number: "1921",
    id: 5,
  },
  {
    name: "Eivor Varinsdottir",
    number: "192-212-3222-2",
    id: 6,
  },
];

app.get("/api/persons", (request, response) => {
  response.json(persons);
});
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
