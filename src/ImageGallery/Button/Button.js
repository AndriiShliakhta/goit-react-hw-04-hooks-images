const Button = ({ loadMore }) => {
  return (
    <div className="buttonContainer">
      <button type="button" onClick={loadMore} className="Button">
        Load More
      </button>
    </div>
  );
};

export default Button;
