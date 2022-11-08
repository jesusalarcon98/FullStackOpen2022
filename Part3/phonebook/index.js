require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const Person = require("./models/person");

app.use(express.json());

morgan.token("info-post", (request) => JSON.stringify(request.body));

app.use(express.static("build"));
app.use(cors());

app.use(
  morgan(
    ":method :url :status :res[content-length] :response-time ms   :info-post"
  )
);

app.get("/api/persons", (request, response) => {
  Person.find({}).then((persons) => {
    response.json(persons);
  });
});

app.get("/api/info", (request, response) => {
  Person.count().then((persons) => {
    const dates = new Date().toString();
    response.send(
      `<p>Phonebook has info for ${persons} people</p> <p>${dates}</p>`
    );
  });
});

app.post("/api/persons", (request, response) => {
  const body = request.body;
  console.log(body.content);

  if (body.name === undefined) {
    return response.status(400).json({
      error: "Name missing",
    });
  }
  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person.save().then((persons) => {
    response.json(persons);
  });
});

app.get("/api/persons/:id", (request, response) => {
  Person.findById(request.params.id).then((person) => {
    response.json(person);
  });
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
