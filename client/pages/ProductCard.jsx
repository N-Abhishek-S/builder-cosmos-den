const ProductCard = ({ product }) => {
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'star filled' : 'star'}>
          <FaStar />
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-palette">
          {product.palette.map((color, index) => (
            <span 
              key={index} 
              className="color-swatch" 
              style={{ backgroundColor: color }}
              title={color}
            ></span>
          ))}
        </div>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <div className="product-meta">
          <span className="product-style">{product.style}</span>
          <div className="product-rating">
            {renderRating(product.rating)}
            <span className="rating-value">({product.rating})</span>
          </div>
        </div>
        <div className="product-price">${product.price.toFixed(2)}</div>
        <button className="add-to-cart-btn">
          <FaShoppingBag /> Add to Cart
        </button>
      </div>
    </div>
  );
};