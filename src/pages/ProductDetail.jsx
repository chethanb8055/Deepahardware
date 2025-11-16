import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();

  if (!product) {
    return <div className="text-center py-4">Product not found. <Link to="/">Go Home</Link></div>;
  }

  return (
    <div className="row g-4">
      <div className="col-md-5">
        <div className="card">
          <img src={product.image} alt={product.name} className="img-fluid p-3" style={{ height: 360, objectFit: 'contain' }} />
        </div>
      </div>

      <div className="col-md-7">
        <h2 className="h5">{product.name}</h2>
        <div className="h4 text-primary mb-3">₹{product.price}</div>
        <p className="text-muted">{product.description}</p>

        <div className="mb-3">
          <h6>Specifications</h6>
          <ul className="small">
            {Object.entries(product.specs).map(([k, v]) => <li key={k}><strong className="me-1 text-capitalize">{k}:</strong> {v}</li>)}
          </ul>
        </div>

        <div className="d-flex gap-2">
          <button onClick={() => addItem(product, 1)} className="btn btn-warning" style={{ backgroundColor: 'var(--deepa-accent)', borderColor: 'var(--deepa-accent)' }}>Add to Cart</button>
          <Link to="/cart" className="btn btn-outline-secondary">Go to Cart</Link>
        </div>
      </div>
    </div>
  );
}
