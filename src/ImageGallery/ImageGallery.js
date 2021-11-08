import axios from 'axios';
import { useState, useEffect } from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
import { SpinnerDotted } from 'spinners-react';

export default function ImageGallery({ imageName, openModal }) {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    getData(1);
    return;
  }, [imageName]);

  useEffect(() => {
    page !== 1 && getData(page);
  }, [page]);

  const getData = page => {
    if (!imageName) {
      return;
    }
    setLoading(true);
    axios
      .get(
        `https://pixabay.com/api/?q=${imageName}&page=${page}&key=23115860-3b173cd8cbd28dc69cb35b572&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(resp => {
        if (page === 1) {
          setPage(1);
          setImages(resp.data.hits);
        } else {
          setImages(prev => [...prev, ...resp.data.hits]);
        }

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      })
      .catch(error => setError(error))
      .finally(setLoading(false));
  };

  return (
    <>
      {' '}
      <ul className="ImageGallery" onClick={openModal}>
        {error && <h1>{error.message}</h1>}
        {loading && <SpinnerDotted />}
        {images &&
          images.map(image => {
            return (
              <ImageGalleryItem
                key={image.id}
                webformatURL={image.webformatURL}
                largeImageURL={image.largeImageURL}
              />
            );
          })}
      </ul>
      {images && <Button className="Button" loadMore={loadMore} />}
    </>
  );
}
