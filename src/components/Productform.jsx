import { useState } from "react";

function Productform({ onGenerate, loading }) {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!productName.trim() || !category.trim()) {
      return;
    }

    onGenerate({
      productName: productName.trim(),
      category: category.trim(),
    });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="productName">Product Name</label>
        <input
          id="productName"
          type="text"
          placeholder="e.g. Wireless Headphones"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          disabled={loading}
          minLength={2}
          maxLength={80}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          placeholder="e.g. Electronics"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={loading}
          minLength={2}
          maxLength={50}
          required
        />
      </div>

      <button
        type="submit"
        className="generate-button"
        disabled={loading || !productName.trim() || !category.trim()}
      >
        {loading ? "Generating..." : "Generate Details"}
      </button>
    </form>
  );
}

export default Productform;
