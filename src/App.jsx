import { useState } from "react";
import ProductForm from "./components/Productform";
import ProductCard from "./components/Productcard";
import Loader from "./components/Loader";
import { generateProductDetails } from "./services/aiservice";
import "./App.css";

function App() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async ({ productName, category }) => {
    setLoading(true);
    setError("");
    setProduct(null);

    try {
      const result = await generateProductDetails(productName, category);

      setProduct(result);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="app">
      <div className="container">
        <header className="hero">
          <h1>AI Product Content Generator</h1>

          <p className="subtitle">
            Enter a product name and category to generate engaging product
            content with AI.
          </p>
        </header>

        <section className="generator-section">
          <ProductForm onGenerate={handleGenerate} loading={loading} />

          {error && <div className="error-message">{error}</div>}

          {loading && <Loader />}

          {product && !loading && <ProductCard product={product} />}
        </section>
      </div>
    </main>
  );
}

export default App;
