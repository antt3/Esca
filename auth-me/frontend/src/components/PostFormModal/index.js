import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PostForm from './PostForm';

function PostFormModal() {
    const [showModal, setShowModal] = useState(false);
  
    return (
        <>
            <button onClick={() => setShowModal(true)}>Sign Up</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <PostForm />
                </Modal>
            )}
        </>
    );
}

export default PostFormModal;