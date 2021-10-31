import { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';

export default function App() {
  const [imageName, setImageName] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [lagreImgURL, setLagreImgURL] = useState('');

  const formSubmit = imageName => {
    setImageName(imageName);
  };
  const openModal = e => {
    if (e.target.tagName === 'IMG') {
      setIsOpenModal(true);
      setLagreImgURL(e.target.dataset.large);
    }
  };
  const toggleModal = () =>
    setIsOpenModal(prev => {
      return !prev;
    });

  return (
    <>
      <Searchbar onSubmit={formSubmit} />
      <ImageGallery imageName={imageName} openModal={openModal} />
      {isOpenModal && (
        <Modal
          lagreImgURL={lagreImgURL}
          openModal={openModal}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
}
