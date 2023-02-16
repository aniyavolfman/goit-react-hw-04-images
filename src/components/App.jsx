import React, { useEffect, useState } from 'react';
import { Button } from './Button/Button';
import { Container } from './Container/Container';
import { Imagegallery } from './Imagegallery/Imagegallery';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { requestImages } from '../services/api';

export function  App () {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState(null);
  const [currentImg, setCurrentImg] = useState(null);
  const [totalImages, setTotalImages] = useState(0);


  useEffect(() => {
    if (query === null && page === 1) return;
    fetchImages(page, query, 12);
  }, [page, query]);

  useEffect(() => {
    if (page > 1) {
      setTimeout(() => window.scrollBy({ top: 1200, behavior: 'smooth' }), 100);
    }
  }, [page]);


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
    setCurrentImg(event.target.dataset.largeimg);
  };

  const closeModal = () => {
    setCurrentImg(null);
  };

    return (
      <Container>
        <Searchbar onSubmit={handleSubmit} />
        {isLoading && <Loader />}
        <Imagegallery images={images} onClick={handleGallery} />
        {(images.length > 0 &&
          page < (Math.ceil(totalImages / 12))) && (
            <Button onClick={handleButton} />
          )}
        {currentImg && (
          <Modal
            largeImg={currentImg}
            alt={query}
            closeModal={closeModal}
          />
        )}
      </Container>
    );
  }

