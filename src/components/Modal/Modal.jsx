import React, { useContext, useEffect } from 'react';
import { ModalContext } from 'context/ModalContext';
import css from './Modal.module.css';

export function Modal() {
  const {
    modalData: { largeImg, alt },
    closeModal,
  } = useContext(ModalContext);
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => { window.removeEventListener('keydown', handleKeyDown); }
  });
  
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      closeModal();
    }
  };
  

  const handleOverlay = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

    return (
      <div className={css.overlay} onClick={handleOverlay}>
        <div className={css.modal}>
          <img src={largeImg} alt={alt} />
        </div>
      </div>
    );
  }


