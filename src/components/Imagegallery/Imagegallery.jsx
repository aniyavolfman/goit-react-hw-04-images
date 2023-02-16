import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css'

export function Imagegallery({ images, onClick }) {
    return (
      <ul className={css.gallery}>
        {images.map(({ id, webformatURL, tags, largeImageURL}) => (
          <ImageGalleryItem
            key={id}
            pageUrl={webformatURL}
            alt={tags}
            datalargeimg={largeImageURL}
            onClick={onClick}
          />
        ))}
      </ul>
    );
}

Imagegallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      onClick: PropTypes.func,
    })
  ),
  onClick: PropTypes.func.isRequired,
};