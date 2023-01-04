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
module.exports = {
  dummy,
  blogLikes,
  favoriteBlog,
};
