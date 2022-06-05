import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PostFormPage from './PostForm';

function PostFormModal() {
    const [showModal, setShowModal] = useState(false);
  
    return (
        <>
            <button onClick={() => setShowModal(true)}>Post</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <PostFormPage setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default PostFormModal;