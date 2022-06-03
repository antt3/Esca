
import { useParams } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './SinglePost.css';

const SinglePost = () => {
  const sessionUser = useSelector(state => state.session.user);
  const posts = useSelector(state=>state.postState.entries);

  console.log('Posts: ', posts);
  const { id } = useParams();
  const singlePost = posts.find(post => post.id === +id);

  if (!sessionUser) return <Redirect to="/login" />;

  return (
    <div className='singlePost'>
      <h1>{singlePost?.title}</h1>
    </div>
  );
};

export default SinglePost;