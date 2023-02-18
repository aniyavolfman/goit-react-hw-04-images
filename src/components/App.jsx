import React, { useContext, useEffect, useState } from 'react';
import { Button } from './Button/Button';
import { Container } from './Container/Container';
import { Imagegallery } from './Imagegallery/Imagegallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { requestImages } from '../services/api';
import { ModalContext } from 'context/ModalContext';


const PER_PAGE = 12;

export function  App () {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(null);
  const [totalImages, setTotalImages] = useState(0);
  const { modalData: { largeImg }, changeModalData } = useContext(ModalContext);


  useEffect(() => {
    async function fetchImages(page, query, per_page) {
      try {
        setIsLoading(true);

        const images = await requestImages(page, query, per_page);
        setImages(prevItems => [...prevItems, ...images.hits]);
        setTotalImages(images.total);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (!query && page === 1) return;
    fetchImages(page, query, PER_PAGE);
  }, [page, query]);

  useEffect(() => {
    if (images.length > PER_PAGE) {
      window.scrollBy({ top: 1200, behavior: 'smooth' });
    }
  }, [images.length]);

  const handleButton = () => {
    setPage(prevState => prevState + 1);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setImages([]);
    
    const inputValue = event.target.elements[1].value;
    setQuery(inputValue);
    setPage(1);
  };


  const handleGallery = event => {
    changeModalData(event.target.dataset.largeimg, query);
  };

    return (
      <Container>
        <Searchbar onSubmit={handleSubmit} />
        {isLoading && <Loader />}
        <Imagegallery images={images} onClick={handleGallery} />
        {images.length > 0 && page < Math.ceil(totalImages / PER_PAGE) && (
          <Button onClick={handleButton} />
        )}
        { largeImg && <Modal />}
      </Container>
    );
  }

