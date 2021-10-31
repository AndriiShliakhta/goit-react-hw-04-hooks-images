import { useState } from 'react';

export default function Searchbar({ onSubmit }) {
  const [imageName, setImageName] = useState('');

  const handleChange = ({ currentTarget }) => {
    setImageName(currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (imageName.trim() === '') {
      return;
    }
    onSubmit(imageName);
    setImageName('');
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={imageName}
          onChange={handleChange}
        />
      </form>
    </header>
  );
}
