import React, { createContext, useState } from 'react'

export const ModalContext = createContext();

function ModalContextProvider({ children }) {
    
    const [modalData, setModaldata] = useState({
      largeImg: null,
      alt: '',
    });

    const closeModal = () => {
       setModaldata({
         largeImg: null,
         alt: '',
       });
    };

    const changeModalData = (largeImg, alt) => { setModaldata({
      largeImg,
      alt,
    }) };
    
    return (
      <ModalContext.Provider value={{ modalData, closeModal, changeModalData }}>
        {children}
      </ModalContext.Provider>
    );
}

export default ModalContextProvider;