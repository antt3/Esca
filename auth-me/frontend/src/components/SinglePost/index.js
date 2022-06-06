import { useHistory, useParams } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './SinglePost.css';
import { removePost } from '../../store/postsReducer';
import { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import PostEdit from '../PostEdit';
import CommentOnPost from '../CommentOnPost';
import { fetchComments } from '../../store/commentsReducer';
import { fetchPosts } from '../../store/postsReducer'; 

const SinglePost = () => {
  const sessionUser = useSelector(state => state.session.user);
  const posts = useSelector(state=>state.postState);
  const comments = useSelector(state=>state.commentState);
  const history = useHistory();
  const dispatch = useDispatch();
  const [ showModal, setShowModal ] = useState(false);
  const [ showModal2, setShowModal2 ] = useState(false);
  //const [ showModal3, setShowModal3 ] = useState(false);



  const { id } = useParams();
  const singlePost = Object.values(posts).find(post => post.id === +id);
  const postComments = Object.values(comments).filter(comment => comment.PostId === singlePost.id);

  const deletePost = (singlePost) => {
    dispatch(removePost(singlePost));
    
    history.push('/posts');
}

 console.log("PostComments-----", postComments)

// [postComments].map(postComment => console.log("id-- ", postComment, "description-- ", postComment));

useEffect(() => {
  dispatch(fetchComments());
  dispatch(fetchPosts());
}, [ dispatch]);

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
          { postComments.length ? postComments.map((postComment) => {
            return <p key={postComment.id}>{postComment.description}</p>
          }) : <p>There are no comments yet...</p>}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className='singlePost'>
          <h1>{singlePost.title}</h1>
          <button onClick={() => setShowModal2(true)}>Comment</button>
            {showModal2 && (
              <Modal onClose={() => setShowModal2(false)}>
                <CommentOnPost props={[setShowModal2, singlePost]} />
              </Modal>
            )}
        </div>
        <h1>Comments List</h1>
        <div className='comments'>
        { postComments.length ? postComments.map((postComment) => {
          return <p key={postComment.id}>{postComment.description}</p>
        }) : <p>There are no comments yet...</p>}
        </div>
      </>
    );
  }
};   

export default SinglePost;