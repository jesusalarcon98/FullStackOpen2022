const blogsRouter = require("express").Router();
const Blog = require("../models/bloglist");

blogsRouter.get("/", (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs.map((blog) => blog.toJSON()));
  });
});

blogsRouter.post("/", (request, response) => {
  const blog = new Blog(request.body);

  blog.save().then((result) => {
    response.status(201).json(result);
  });
});

module.exports = blogsRouter;
