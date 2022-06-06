import { useHistory, useParams, NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './SinglePost.css';
import { removePost } from '../../store/postsReducer';
import { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import PostEdit from '../PostEdit';
import CommentOnPost from '../CommentOnPost';
import { fetchComments } from '../../store/commentsReducer';

const SinglePost = () => {
  const sessionUser = useSelector(state => state.session.user);
  const posts = useSelector(state=>state.postState);
  const comments = useSelector(state=>state.commentState);
  const history = useHistory();
  const dispatch = useDispatch();
  const [ showModal, setShowModal ] = useState(false);
  const [ showModal2, setShowModal2 ] = useState(false);


  const { id } = useParams();
  const singlePost = Object.values(posts).find(post => post.id === +id);
  const postComments = Object.values(comments).find(comment => comment.PostId === singlePost.id);

  console.log("-----Comments1: ", postComments.id);
  console.log("-----Comments2: ", postComments.PostId);
  

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
            <button onClick={() => setShowModal2(true)}>Comment</button>
            {showModal2 && (
              <Modal onClose={() => setShowModal2(false)}>
                <CommentOnPost props={[setShowModal2, singlePost]} />
              </Modal>
            )}
        </div>
        <h1>Comments List</h1>
        <div className='comments'>
          { postComments ? (postComments).map(({ id, description, userId }) => (
            <div key={id}><NavLink to={`/users/${userId}`}>{description}</NavLink></div>
          )) : <div>There are no comments yet...</div>}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className='singlePost'>
          <h1>{singlePost.title}</h1>
        </div>
        <h1>Comments List</h1>
        <div className='comments'>
        { postComments ? (postComments).map(({ id, description, userId }) => (
            <div key={id}><NavLink to={`/users/${userId}`}>{description}</NavLink></div>
          )) : <div>There are no comments yet...</div>}
        </div>
      </>
    );
  }
};   

export default SinglePost;