import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import SinglePost from '../SinglePost';
import { fetchPosts } from '../../store/postsReducer';
import './PostList.css';

const PostList = () => {
  const sessionUser = useSelector(state => state.session.user);
  // let [ reload, setReload ] = useState(0);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postState);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // useEffect(() => {
  //   if (reload < 2) {
  //     setReload(reload++);
  //   }
  // }, [reload]);



  if (!sessionUser) return <Redirect to="/login" />;

  return (
    <div>
      <h1>Posts List</h1>
      <ol>
        {Object.values(posts).map(({ id, title }) => (
          <li key={id}><NavLink to={`/posts/${id}`}>{title}</NavLink></li>
        ))}
      </ol>

      <Switch>
        <Route path='/posts/:id'>
          <SinglePost posts={posts} />
        </Route>
      </Switch>
    </div>
  );
};

export default PostList;