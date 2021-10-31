export default function ImageGalleryItem({ webformatURL, largeImageURL }) {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        data-large={largeImageURL}
        alt=""
        className="ImageGalleryItem-image"
      />
    </li>
  );
}
