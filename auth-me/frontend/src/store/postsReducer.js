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
  const response = await fetch('/api/posts');
  const posts = await response.json();
  dispatch(loadPosts(posts));
  return posts;
};

export const writePost = (payload) => async (dispatch) => {
    console.log('post reducer: ', payload)

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
  const response = await csrfFetch(`/api/posts/${payload.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
  if (response.ok) {
    const post = await response.json();
    dispatch(addPost(post));
    return post;
  }
};

export const removePost = (postId) => async dispatch => {
  const response = await csrfFetch (`/api/posts/${postId}`, {
    method: 'DELETE',
    body: JSON.stringify({postId})
  })
  if (response.ok) {
    const allPosts = await response.json();
    dispatch(deletePost(allPosts))
    return allPosts;
  }
};

const initialState = { entries: [], isLoading: true };

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS: 
      const newPosts = {};
      action.posts.forEach((post) => newState[post.id] = post);
      return { ...state, ...newPosts}
    case ADD_POST:
      return { ...state, entries: [...state.entries, action.post] };
    case EDIT_POST:
      return { ...state, [ action.post.id ]: action.post };
    case DELETE_POST:
      const newState = { ...state };
      delete newState[action.postId];
      return newState;
    default:
      return state;
  }
};

export default postReducer;