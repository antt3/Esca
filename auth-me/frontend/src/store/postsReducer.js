import { csrfFetch } from './csrf';

const LOAD_POSTS = 'posts/loadPosts';
const ADD_POST = 'posts/addPost';

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

export const fetchPosts = () => async (dispatch) => {
  const response = await fetch('/api/posts');
  const posts = await response.json();
  dispatch(loadPosts(posts));
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

const initialState = { entries: [], isLoading: true };

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    // case LOAD_POSTS: 
    //   return { ...state.entries, [action.posts]: action.posts };
    // case ADD_POST:
    //   return { ...state.entries, [action.post.id]: action.post };
    case LOAD_POSTS: 
      return { ...state, entries: [...action.posts] };
    case ADD_POST:
      return { ...state, entries: [...state.entries, action.post] };
    default:
      return state;
  }
};

export default postReducer;