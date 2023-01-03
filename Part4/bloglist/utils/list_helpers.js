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
  console.log(likes);

  return likes;
};

module.exports = {
  dummy,
  blogLikes,
};
