import { useEffect } from 'react';

export default function Modal({ lagreImgURL, toggleModal }) {
  useEffect(() => {
    window.addEventListener('keydown', onHandleEscapeClick);
    return () => window.removeEventListener('keydown', onHandleEscapeClick);
  });

  const onHandleEscapeClick = e => e.code === 'Escape' && toggleModal();

  const onOverlayClick = e => {
    if (e.target === e.currentTarget) toggleModal();
  };

  return (
    <div className="Overlay" onClick={onOverlayClick}>
      <div className="Modal">
        <img src={lagreImgURL} alt="" />
      </div>
    </div>
  );
}
