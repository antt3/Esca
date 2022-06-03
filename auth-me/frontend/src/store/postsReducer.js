const LOAD_POSTS = 'posts/loadPosts';
const ADD_POST = 'posts/addPosts';

export const loadPosts = (posts) => {
  return {
    type: LOAD_POSTS,
    posts
  };
};

export const addPosts = (posts) => {
  return {
    type: ADD_POST,
    posts
  };
};

export const fetchPosts = () => async (dispatch) => {
  const response = await fetch('/api/posts');
  const posts = await response.json();
  dispatch(loadPosts(posts));
};

export const writePost = (payload) => async (dispatch) => {
  const response = await fetch('/api/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    const post = await response.json();
    dispatch((post));
    return post;
  }
};

const initialState = { entries: {}, isLoading: true };

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS: 
      return { ...state, entries: [...action.posts] };
    case ADD_POST:
      return { ...state, entries: [...state.entries, action.posts] };
    default:
      return state;
  }
};

export default postReducer;