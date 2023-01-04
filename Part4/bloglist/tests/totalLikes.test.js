const totalLikes = require("../utils/list_helpers");
const materials = require("./test_materials");
/* const materials = require("./test_materials"); */

describe("total likes in the blog", () => {
  test("Of empty list is zero", () => {
    const result = totalLikes.blogLikes(materials.noBlogList);
    expect(result).toBe(0);
  });

  test("of one value is the value itself", () => {
    const result = totalLikes.blogLikes(materials.listWithOneBlog);
    expect(result).toBe(5);
  });

  test("Of a bigger list is calculated right", () => {
    const result = totalLikes.blogLikes(materials.listWithSomeBlogs);
    expect(result).toBe(39);
  });
});
