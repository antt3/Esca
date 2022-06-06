import React from 'react';

import './DeleteComment.css';

import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { removeComment } from "../../store/commentsReducer";

function DeleteComment({props}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const setShowModal4 = props[0];
    const postComment = props[1];

    const handleClick = async(e) => {
        dispatch(removeComment(postComment));

        setShowModal4(false);

    }
  
    if (!sessionUser) return <Redirect to="/splash" />;
  
    return (
        <>
            <p>
                Are you sure you want to delete this comment?
            </p>
            <button className="delBut" onClick={(e)=> handleClick(e)}>Confirm</button>
        </>
    )
}

export default DeleteComment;