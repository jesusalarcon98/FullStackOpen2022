const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.json());

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

morgan.token("info-post", (request) => JSON.stringify(request.body));

app.use(
  morgan(
    ":method :url :status :res[content-length] :response-time ms   :info-post"
  )
);

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/info", (request, response) => {
  const maxID = persons.length;
  const dates = new Date().toString();
  response.send(`<p>Phonebook has info for ${maxID} people</p>
  <p>${dates}</p>`);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    response.json(person);
  } else {
    response.status(400).end();
  }
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});

const IDRandom = () => {
  const numberID = Math.floor(Math.random() * 100000);
  return numberID;
};

app.post("/api/persons", (request, response) => {
  const body = request.body;
  const nameUnique = persons.find((person) => person.name === body.name);
  const checkExists = !body.name || !body.number;
  if (checkExists) {
    return response.status(400).json({
      error: "missing name or number",
    });
  }
  if (nameUnique) {
    return response.status(400).json({
      error: "name must be unique",
    });
  }
  const person = {
    name: body.name,
    number: body.number,
    id: IDRandom(),
  };
  persons = persons.concat(person);
  response.json(person);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
