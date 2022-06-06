import { csrfFetch } from './csrf';

const LOAD_POSTS = 'posts/loadPosts';
const ADD_POST = 'posts/addPost';
const EDIT_POST = 'posts/editPost';
const DELETE_POST = 'posts/deletPost'

export const loadPosts = (posts) => {
  return {
    type: LOAD_POSTS,
    posts
  };
};

export const addPost = (post) => {
  return {
    type: ADD_POST,
    post
  };
};

export const editPost = (post) => {
  return {
    type: EDIT_POST,
    post
  };
};

export const deletePost = (post) => {
  return {
    type: DELETE_POST,
    post
  };
};

export const fetchPosts = () => async (dispatch) => {
  const response = await csrfFetch('/api/posts');
  if (response.ok) {
    const posts = await response.json();
    dispatch(loadPosts(posts));
    return posts;
  }
};

export const writePost = (payload) => async dispatch => {

  const response = await csrfFetch('/api/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    const post = await response.json();
    dispatch(addPost(post));
    return post;
  }
};

export const updatePost = (payload) => async dispatch => {
  console.log("----Payload-----", payload.singlePost.id);
  const response = await csrfFetch(`/api/posts/${payload.singlePost.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  if (response.ok) {
    const post = await response.json();
    dispatch(editPost(post));
    return post;
  }
};

export const removePost = (postId) => async dispatch => {
  const response = await csrfFetch (`/api/posts/${postId.id}`, {
    method: 'DELETE',
  })
  if (response.ok) {
    const post = await response.json();
    dispatch(deletePost(post))
    return post;
  }
};

const initialState = {};

const postReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case LOAD_POSTS: 
      newState = {...state};
      action.posts.forEach((post) => newState[post.id] = post);
      return newState
    case ADD_POST:
      newState = {...state}
      newState = { ...state, [action.post.id]: action.post };
      return newState
    case EDIT_POST:
      newState = {...state}
      return { ...state, [ action.post.id ]: action.post };
    case DELETE_POST:
      newState = { ...state };
      delete newState[action.post.id];
      return newState;
    default:
      return state;
  }
};

export default postReducer;