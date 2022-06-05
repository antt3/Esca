
import { useHistory, useParams } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './SinglePost.css';
import { removePost } from '../../store/postsReducer';

const SinglePost = () => {
  const sessionUser = useSelector(state => state.session.user);
  const posts = useSelector(state=>state.postState);
  const history = useHistory();
  const dispatch = useDispatch();

  const { id } = useParams();
  const singlePost = Object.values(posts).find(post => post.id === +id);

  const deletePost = (postId) => {
    dispatch(removePost(postId));
    history.push('/');
}

  console.log('singlePost: ', singlePost.userId, "sessionUserId: ", sessionUser.id);

  if (!sessionUser) return <Redirect to="/login" />;

  if (singlePost.userId === sessionUser.id) {
    return (
      <div className='singlePost'>
        <h1>{singlePost.title}</h1>
        <button  value={singlePost.id}  onClick={()=>deletePost(singlePost.id)}>Delete</button>
      </div>
    );
  } else {
    return (
      <div className='singlePost'>
        <h1>{singlePost.title}</h1>
      </div>
    );
  }
};   

export default SinglePost;