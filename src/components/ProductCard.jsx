import "./ProductCard.css";

function ProductCard({
  title,
  price,
  category = "General",
  inStock,
  onAddToCart,
  children,
}) {
  const formattedPrice = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  }).format(price);

  return (
    <div className={`product-card ${inStock ? "" : "out-of-stock"}`}>
      {children && <div className="badge">{children}</div>}

      <h3 className="product-title">{title}</h3>
      <p className="product-category">{category}</p>
      <p className="product-price">{formattedPrice}</p>

      <p className={inStock ? "status in-stock" : "status out-of-stock-label"}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>

      <button
        className="add-btn"
        onClick={() => onAddToCart(title)}
        disabled={!inStock}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;