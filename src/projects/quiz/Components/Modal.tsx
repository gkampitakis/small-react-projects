import React, { ReactElement } from 'react';
import { useGlobalContext } from '../context';

export default function Modal (): ReactElement {
  const { closeModal, isModalOpen, correct, questions } = useGlobalContext();

  return (
    <div
      className={`${isModalOpen ? 'modal-container isOpen' : 'modal-container'
        }`}
    >
      <div className='modal-content'>
        <h2>congrats!</h2>
        <p>
          You answered {((correct / questions.length) * 100).toFixed(0)}% of
        questions correctly
      </p>
        <button className='close-btn' onClick={closeModal}>
          play again
      </button>
      </div>
    </div>
  );
}
