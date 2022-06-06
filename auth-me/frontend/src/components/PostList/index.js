import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import SinglePost from '../SinglePost';
import { fetchPosts } from '../../store/postsReducer';
import './PostList.css';

const PostList = () => {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postState);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (!sessionUser) return <Redirect to="/splash" />;

  return (
    <div>
      <h1>Recent Posts</h1>
      <div>
        {Object.values(posts).map(({ id, title }) => (
          <div key={id} className="postList"><NavLink to={`/posts/${id}`}>{title}</NavLink></div>
        ))}
      </div>
      <Switch>
        <Route path='/posts/:id'>
          <SinglePost posts={posts} />
        </Route>
      </Switch>
    </div>
  );
};

export default PostList;