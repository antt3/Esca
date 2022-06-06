import { useParams } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './SinglePost.css';
import React, { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import PostEdit from '../PostEdit';
import CommentOnPost from '../CommentOnPost';
import DeletePost from '../DeletePost';
import DeleteComment from '../DeleteComment';
import { fetchComments } from '../../store/commentsReducer';
import { fetchPosts } from '../../store/postsReducer'; 

const SinglePost = () => {
  const sessionUser = useSelector(state => state.session.user);
  const posts = useSelector(state=>state.postState);
  const comments = useSelector(state=>state.commentState);
  const dispatch = useDispatch();
  const [ showModal, setShowModal ] = useState(false);
  const [ showModal2, setShowModal2 ] = useState(false);
  const [ showModal3, setShowModal3 ] = useState(false);
  const [ showModal4, setShowModal4 ] = useState(false);

  const { id } = useParams();
  const singlePost = Object.values(posts).find(post => post.id === +id);
  const postComments = Object.values(comments).filter(comment => comment.PostId === singlePost.id);

  useEffect(() => {
    dispatch(fetchComments());
    dispatch(fetchPosts());
  }, [ dispatch ]);
  
  if (!sessionUser) return <Redirect to="/splash" />;

  if (singlePost.userId === sessionUser.id) {
    return (
      <> 
        <article>
          <div>
            <h1>{singlePost.title}</h1>
          </div>
          <div className='singlePost'>
            <button className="single" onClick={()=>setShowModal3(true)}>Delete Post</button>
            {showModal3 && (
              <Modal onClose={() => setShowModal3(false)}>
                <DeletePost props={[setShowModal3, singlePost]} />
              </Modal>
            )}
            <button className="single" onClick={() => setShowModal(true)}>Edit </button>
            {showModal && (
              <Modal onClose={() => setShowModal(false)}>
                <PostEdit props={[setShowModal, singlePost]} />
              </Modal>
            )}
              <button className="single" onClick={() => setShowModal2(true)}>Comment</button>
              {showModal2 && (
                <Modal onClose={() => setShowModal2(false)}>
                  <CommentOnPost props={[setShowModal2, singlePost]} />
                </Modal>
              )}
          </div>
          <h1 className="ch1">Comments</h1>
          <div className='comments'>
            { postComments.length ? postComments.map((postComment) => {
              if (postComment.userId === sessionUser.id) {
                return (
                  <>
                    <p key={postComment.id}>{postComment.description}</p>
                    <button className="single" onClick={()=>setShowModal4(true)}>Delete Comment</button>
                    {showModal4 && (
                      <Modal onClose={() => setShowModal4(false)}>
                        <DeleteComment props={[setShowModal4, postComment]} />
                      </Modal>
                    )}
                  </>
                );
              } else { return (<p key={postComment.id}>{postComment.description}</p>);}
            }) : <p>There are no comments yet...</p>}
          </div>
        </article>
      </>
    );
  } else {
    return (
      <>
        <div>
          <h1>{singlePost.title}</h1>
        </div>
        <div className="singlePost">
          <button className="single" onClick={() => setShowModal2(true)}>Comment</button>
            {showModal2 && (
              <Modal onClose={() => setShowModal2(false)}>
                <CommentOnPost props={[setShowModal2, singlePost]} />
              </Modal>
            )}
        </div>
        <h1 className="ch1">Comments</h1>
        <div className='comments'>
        { postComments.length ? postComments.map((postComment) => {
          if (postComment.userId === sessionUser.id) {
            return (
              <>
                <p key={postComment.id}>{postComment.description}</p>
                <button className="single" onClick={()=>setShowModal4(true)}>Delete Comment</button>
                {showModal4 && (
                  <Modal onClose={() => setShowModal4(false)}>
                    <DeleteComment props={[setShowModal4, postComment]} />
                  </Modal>
                )}
              </>
            );
          } else { return (<p key={postComment.id}>{postComment.description}</p>);}
        }) : <p>There are no comments yet...</p>}
        </div>
      </>
    );
  }
};   

export default SinglePost;