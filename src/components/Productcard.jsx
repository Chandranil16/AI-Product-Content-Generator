function Productcard({ product }) {
  if (!product) {
    return null;
  }

  return (
    <div className="product-card">
      <div className="product-card-header">
        <span className="product-category">{product.category}</span>
      </div>

      <div className="product-card-body">
        <h2>{product.title}</h2>

        <p>{product.description}</p>

        <div className="keywords">
          {product.keywords?.map((keyword, index) => (
            <span className="keyword" key={`${keyword}-${index}`}>
              #{keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Productcard;
