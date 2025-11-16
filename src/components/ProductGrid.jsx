import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ items = [], onAdd }) {
  if (!items.length) {
    return <div className="text-center text-muted py-4">No products found.</div>;
  }

  return (
    <div className="row g-3">
      {items.map(p => (
        <div key={p.id} className="col-6 col-sm-6 col-md-4 col-lg-3">
          <ProductCard product={p} onAdd={onAdd} />
        </div>
      ))}
    </div>
  );
}
