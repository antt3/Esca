import { useHistory, useParams } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './SinglePost.css';
import { removePost } from '../../store/postsReducer';
import { useState } from 'react';
import { Modal } from '../../context/Modal';
import PostEdit from '../PostEdit';

const SinglePost = () => {
  const sessionUser = useSelector(state => state.session.user);
  const posts = useSelector(state=>state.postState);
  const history = useHistory();
  const dispatch = useDispatch();
  const [ showModal, setShowModal ] = useState(false);

  const { id } = useParams();
  const singlePost = Object.values(posts).find(post => post.id === +id);

  const deletePost = (singlePost) => {
    dispatch(removePost(singlePost));

    history.push('/posts');
}

  if (!sessionUser) return <Redirect to="/login" />;

  if (singlePost.userId === sessionUser.id) {
    return (
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