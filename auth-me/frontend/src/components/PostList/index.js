import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import SingleArticle from '../SingleArticle';
import { fetchPosts } from '../../store/postsReducer';

const PostList = ({sessionUser}) => {

  const dispatch = useDispatch();
  
  const posts = useSelector(state=>state.postState.entries);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (!sessionUser) return <Redirect to="/login" />;

  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {posts.map(({ id, title }) => (
          <li key={id}><NavLink to={`/article/${id}`}>{title}</NavLink></li>
        ))}
      </ol>

      <Switch>
        <Route path='/article/:id'>
          <SingleArticle posts={posts} />
        </Route>
      </Switch>
    </div>
  );
};

export default PostList;