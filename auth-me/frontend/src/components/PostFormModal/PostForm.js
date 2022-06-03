import React, { useState } from "react";

import './PostForm.css';

import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as postsReducer from "../../store/postsReducer";

function PostFormPage() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [post, setPost] = useState("");
    const [errors, setErrors] = useState([]);
  
    if (!sessionUser) return <Redirect to="/" />;
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (post !== "") {
            setErrors([]);
            return dispatch(postsReducer.writePost({ post }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Must write a post']);
    };
  
    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                Write your post
                <input
                    type="text"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Post</button>
        </form>
    );
}

export default PostFormPage;