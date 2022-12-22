const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
require("dotenv").config();
const Blog = require("./models/bloglist");

app.use(express.json());
app.use(cors());
app.use(express.static("build"));
morgan.token("info-post", (request) => JSON.stringify(request.body));

app.use(
  morgan(
    ":method :url :status :res[content-length] :response-time ms :info-post"
  )
);

app.get("/api/blogs", (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs.map((blog) => blog.toJSON()));
  });
});

app.post("/api/blogs", (request, response) => {
  const blog = new Blog(request.body);

  blog.save().then((result) => {
    response.status(201).json(result);
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
