import { useHistory, useParams, NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './SinglePost.css';
import { removePost } from '../../store/postsReducer';
import { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import PostEdit from '../PostEdit';
import { fetchComments } from '../../store/commentsReducer';

const SinglePost = () => {
  const sessionUser = useSelector(state => state.session.user);
  const posts = useSelector(state=>state.postState);
  const comments = useSelector(state=>state.commentState);
  const history = useHistory();
  const dispatch = useDispatch();
  const [ showModal, setShowModal ] = useState(false);

  const { id } = useParams();
  const singlePost = Object.values(posts).find(post => post.id === +id);
  const postComments = Object.values(comments).find(comment => comment.PostId === singlePost.id)
  

  const deletePost = (singlePost) => {
    dispatch(removePost(singlePost));

    history.push('/posts');
}

useEffect(() => {
  dispatch(fetchComments());
}, [dispatch]);

  if (!sessionUser) return <Redirect to="/login" />;

  if (singlePost.userId === sessionUser.id) {
    return (
      <>
        <div className='singlePost'>
          <h1>{singlePost.title}</h1>
          <button  value={singlePost}  onClick={()=>deletePost(singlePost)}>Delete</button>
          <button onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
              <Modal onClose={() => setShowModal(false)}>
                <PostEdit props={[setShowModal, singlePost]} />
              </Modal>
            )}
        </div>
        <div className='comments'>
          {(postComments).map(({ id, description, userId }) => (
            <div>
              <NavLink to={`/users/${userId}`}>{description}</NavLink>
              <p key={id}>{description}</p>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className='singlePost'>
          <h1>{singlePost.title}</h1>
        </div>
        <h1>Posts List</h1>
        <div className='comments'>
          {Object.values(postComments).map(({ id, description, userId }) => (
            <div>
              <NavLink to={`/users/${userId}`}>{description}</NavLink>
              <p key={id}>{description}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
};   

export default SinglePost;