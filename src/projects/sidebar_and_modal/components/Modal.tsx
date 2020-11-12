import React from 'react';
import { useGlobalContext } from '../context';
import { FaTimes } from 'react-icons/fa';

export default function Modal () {
  const { closeModal, isModalOpen } = useGlobalContext();


  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <h3>Modal Content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  )
}
