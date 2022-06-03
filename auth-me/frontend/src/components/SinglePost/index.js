import { useParams } from 'react-router-dom';
import './SinglePost.css';

const SinglePost = ({ posts }) => {
  const { id } = useParams();
  const singlePost = posts.find(post => post.id === +id);
  return (
    <div className='singlePost'>
      <h1>{singlePost?.title}</h1>
    </div>
  );
};

export default SinglePost;