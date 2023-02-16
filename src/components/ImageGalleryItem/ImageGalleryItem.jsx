import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css'

export function ImageGalleryItem({ pageUrl, alt, datalargeimg, onClick }) {
  return (
    <li className={css.galleryItem} onClick={onClick}>
      <img
        src={pageUrl}
        alt={alt}
        className={css.galleryItemImage}
        data-largeimg={datalargeimg}
      />
    </li>
  );
}

 ImageGalleryItem.propTypes = {
   pageUrl: PropTypes.string.isRequired,
   alt: PropTypes.string.isRequired,
   datalargeimg: PropTypes.string.isRequired,
   onClick: PropTypes.func,
 };