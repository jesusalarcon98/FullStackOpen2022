const moreLikes = require("../utils/list_helpers");
const materials = require("./test_materials");

const blog = {
  author: "Edsger W. Dijkstra",
  likes: 5,
};
const blogs = {
  author: "Robert C. Martin",
  likes: 19,
};

describe("Author with more likes", () => {
  test("Zero blogs and no likes", () => {
    const result = moreLikes.mostLikes(materials.noBlogList);
    expect(result).toEqual("zero");
  });
  test("Blog with just one", () => {
    const result = moreLikes.mostLikes(materials.listWithOneBlog);
    expect(result).toEqual(blog);
  });
  test("two or more blogs with same author", () => {
    const result = moreLikes.mostLikes(materials.listWithSomeBlogs);
    expect(result).toEqual(blogs);
  });
});
