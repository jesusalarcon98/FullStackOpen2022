var _ = require("lodash");
const dummy = (blogs) => {
  return 1;
};

const blogLikes = (blog) => {
  const arrayLikes = blog.map((blogs) => {
    return blogs.likes;
  });
  const likes = arrayLikes.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return likes;
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return "zero";
  } else {
    const MaxLikes = Math.max(...blogs.map((MaxLikes) => MaxLikes.likes));
    var result = blogs.find((blogs) => blogs.likes === MaxLikes);
    return {
      title: result.title,
      author: result.author,
      likes: result.likes,
    };
  }
};

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return "zero";
  } else {
    let numberBlogs = _.map(_.countBy(blogs, "author"), (value, key) => ({
      author: key,
      blogs: value,
    }));
    let maxBlogger = _.maxBy(numberBlogs, (numbers) => {
      return numbers.blogs;
    });
    return maxBlogger;
  }
};
module.exports = {
  dummy,
  blogLikes,
  favoriteBlog,
  mostBlogs,
};
