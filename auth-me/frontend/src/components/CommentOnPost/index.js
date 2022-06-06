import React, { useState } from "react";

import './CommentOnPost.css';

import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as commentsReducer from "../../store/commentsReducer";

function CommentOnPost({props}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);
    const setShowModal2 = props[0];
    const singlePost = props[1];
  
    if (!sessionUser) return <Redirect to="/login" />;
  
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (description !== "") {
            setErrors([]);
            const comment = {
                description,
                sessionUser,
                singlePost
            };
            const returnedComment = await dispatch(commentsReducer.writeComment(comment));
            
            if (returnedComment) {
                reset();

                setShowModal2(false);

                return history.push(`/posts/${returnedComment.PostId}`);
            }
            
        }
        return setErrors(['Must write a comment']);
    };

    const reset = () => {
        setDescription('');
    };
  
    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                Create a comment
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default CommentOnPost;