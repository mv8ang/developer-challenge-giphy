// increment likes
const incrementLikes = (index) => {
  return {
    type: 'INCREMENT_LIKES',
    index,
  };
};

// add comment
const addComment = (postId, author, comment) => {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment,
  };
};

// remove comment
const removeComment = (index, postId) => {
  return {
    type: 'REMOVE_CONTENT',
    index,
    postId,
  };
};
