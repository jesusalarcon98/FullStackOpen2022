const materials = require("./test_materials");
const moreBlogs = require("../utils/list_helpers");

const blog = {
  author: "Edsger W. Dijkstra",
  blogs: 1,
};

const blogs = {
  author: "Robert C. Martin",
  blogs: 3,
};

describe("Person with more blogs", () => {
  test("Person with zero blogs", () => {
    const result = moreBlogs.mostBlogs(materials.noBlogList);
    expect(result).toEqual("zero");
  });
  test("Person with one blog", () => {
    const result = moreBlogs.mostBlogs(materials.listWithOneBlog);
    expect(result).toEqual(blog);
  });
  test("Person with some blogs", () => {
    const result = moreBlogs.mostBlogs(materials.listWithSomeBlogs);
    expect(result).toEqual(blogs);
  });
});
