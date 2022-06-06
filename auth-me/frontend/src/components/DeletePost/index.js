import './DeletePost.css';

import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { removePost } from "../../store/postsReducer";

function EditForm({props}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const setShowModal3 = props[0];
    const singlePost = props[1];

    const handleClick = async(e) => {
        dispatch(removePost(singlePost));

        setShowModal3(false);

        history.push('/posts');
            
    }
  
    if (!sessionUser) return <Redirect to="/login" />;
  
    return (
        <>
            <p>
                Are you sure you want to delete this post?
            </p>
            <button onClick={(e)=> handleClick(e)}>Confirm</button>
        </>
    )
}

export default EditForm