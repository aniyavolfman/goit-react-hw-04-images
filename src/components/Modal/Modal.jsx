import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export function Modal(props) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => { window.removeEventListener('keydown', handleKeyDown); }
  }, []);
  
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      props.closeModal();
    }
  };
  

  const handleOverlay = event => {
    if (event.target === event.currentTarget) {
      props.closeModal();
    }
  };

    const { largeImg, alt } = props;
    return (
      <div className={css.overlay} onClick={handleOverlay}>
        <div className={css.modal}>
          <img src={largeImg} alt={alt} />
        </div>
      </div>
    );
  }


 Modal.propTypes = {
   largeImg: PropTypes.string.isRequired,
   closeModal: PropTypes.func.isRequired,
   alt: PropTypes.string.isRequired,
 };