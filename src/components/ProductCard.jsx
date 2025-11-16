// src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="product-card position-relative h-100">
      {/* PLUS icon overlay */}
      <button
        type="button"
        aria-label={`Add ${product.name} to cart`}
        className="btn btn-sm position-absolute"
        title="Add"
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          onAdd(product);
        }}
        style={{
          right: 8,
          top: 8,
          zIndex: 30,
          background: "rgba(255,255,255,0.95)",
          border: "1px solid rgba(16,24,40,0.06)",
          width: 36,
          height: 36,
          borderRadius: 10,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 10px rgba(16,24,40,0.06)",
        }}
      >
        <i className="bi bi-plus-lg" aria-hidden="true"></i>
        <span className="visually-hidden">Add</span>
      </button>

      <Link
        to={`/product/${product.id}`}
        className="text-decoration-none text-body d-flex flex-column h-100"
      >
        <div className="product-img">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid"
            loading="lazy"
          />
        </div>

        <div className="card-body-custom d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start">
            <div className="product-title">{product.name}</div>
            {product.popular && <div className="badge-popular">Popular</div>}
          </div>

          <div className="mt-auto d-flex justify-content-between align-items-center">
            <div className="product-price">₹{product.price}</div>
            {/* small details icon */}
            <div className="text-muted small">View</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
