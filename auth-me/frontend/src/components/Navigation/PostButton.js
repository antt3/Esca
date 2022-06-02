import React, { useState, useEffect } from "react";

// import { useDispatch } from 'react-redux';
// import * as sessionActions from '../../store/session';

function PostButton({ user }) {
    // const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    
    const openModal = () => {
        if (showModal) return;
        setShowModal(true);
    };
    
    useEffect(() => {
        if (!showModal) return;
    
        const closeModal = () => {
            setShowModal(false);
        };
    
        document.addEventListener('click', closeModal);
      
        return () => document.removeEventListener("click", closeModal);
    }, [showModal]);
  
    const working = (e) => {
        e.preventDefault();
        console.log('WORKING NOICELY')
    };
  
    return (
        <>
            <button onClick={openModal}>
                <i className="postButton" />
            </button>
            {showModal && (
                <ul className="post">
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>
                        <button onClick={working}>Test</button>
                    </li>
                </ul>
            )}
        </>
    );
}

export default PostButton;