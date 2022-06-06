import React, { useState } from "react";

import './EditForm.css';

import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import * as postsReducer from "../../store/postsReducer";

function EditForm({props}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [title, setTitle] = useState("");
    const [errors, setErrors] = useState([]);
    const setShowModal = props[0];
    const singlePost = props[1];
  
    if (!sessionUser) return <Redirect to="/splash" />;
  
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (title !== "") {
            setErrors([]);
            const editedPost = {
                title,
                sessionUser,
                singlePost
            };
            const returnedPost = await dispatch(postsReducer.updatePost(editedPost))
            
            if (returnedPost) {
                reset();

                setShowModal(false);

                return history.push(`/posts/${returnedPost.id}`);
            }
            
        }
        return setErrors(['Must write a post']);
    };

    const reset = () => {
        setTitle('');
    };
  
    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                Edit your post
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default EditForm