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

  // useEffect(() => {
  //   if (!imageName) {
  //     return;
  //   }
  //   setImages(null);
  //   setPage(1);

  //   console.log(page);
  //   getData();
  // }, [imageName, page]);

  useEffect(() => {
    if (!imageName) {
      return;
    }
    setImages(null);
    setPage(1);

    getData();
  }, [imageName]);

  useEffect(() => {
    if (!imageName) {
      return;
    }
    getData();
  }, [page]);

  // componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.page !== page ||
  //     prevProps.imageName !== imageName
  //   ) {
  //     // this.getData();

  //     if (prevProps.imageName !== this.props.imageName) {
  //       this.setState({ images: null, page: 1 });
  //     }
  //   }
  // }

  const getData = () => {
    setLoading(true);
    axios
      .get(
        `https://pixabay.com/api/?q=${imageName}&page=${page}&key=23115860-3b173cd8cbd28dc69cb35b572&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(resp => {
        setImages(page === 1 ? resp.data.hits : [...images, ...resp.data.hits]);
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

// class ImageGallery extends Component {
//   state = {
//     images: null,
//     loading: false,
//     error: null,
//     page: 1,
//   };

//   loadMore = () => {
//     this.setState(prev => ({ page: prev.page + 1 }));
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (
//       prevState.page !== this.state.page ||
//       prevProps.imageName !== this.props.imageName
//     ) {
//       this.getData();

//       if (prevProps.imageName !== this.props.imageName) {
//         this.setState({ images: null, page: 1 });
//       }
//     }
//   }

//   getData = () => {
//     this.setState({ loading: true });

//     axios
//       .get(
//         `https://pixabay.com/api/?q=${this.props.imageName}&page=${this.state.page}&key=23115860-3b173cd8cbd28dc69cb35b572&image_type=photo&orientation=horizontal&per_page=12`,
//       )
//       .then(resp => {
//         this.setState(prev => ({
//           images:
//             prev.page === 1
//               ? resp.data.hits
//               : [...prev.images, ...resp.data.hits],
//         }));
//         window.scrollTo({
//           top: document.documentElement.scrollHeight,
//           behavior: 'smooth',
//         });
//       })
//       .catch(error => this.setState({ error }))
//       .finally(this.setState({ loading: false }));
//   };
// }
