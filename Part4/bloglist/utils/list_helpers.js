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
  console.log(blogs);
  console.log("blogs", blogs);
  const blogExists =
    blogs.length === 0
      ? "zero"
      : Math.max(...blogs.map((MaxLikes) => MaxLikes.likes));
  const MaxLikes = Math.max(...blogs.map((MaxLikes) => MaxLikes.likes));
  var result = blogs.find((blogs) => blogs.likes === MaxLikes);
  return {
    title: result.title,
    author: result.author,
    likes: result.likes,
  };
};

/* var arr = [1,2,3];
var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
}, -Infinity); */
module.exports = {
  dummy,
  blogLikes,
  favoriteBlog,
};
