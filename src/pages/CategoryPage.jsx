import React from "react";
import { useParams, useLocation } from "react-router-dom";
import products from "../data/products";
import ProductGrid from "../components/ProductGrid";
import { useCart } from "../context/CartContext";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function CategoryPage() {
  const { slug } = useParams();
  const q = useQuery().get("search") || "";
  const { addItem } = useCart();

  const filtered = products.filter(p => p.category === slug && p.name.toLowerCase().includes(q.toLowerCase()));
  const itemsToShow = filtered.length ? filtered : products.filter(p => p.category === slug);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="h5 text-capitalize mb-0">{slug}</h2>
        <div className="small text-muted">{itemsToShow.length} items</div>
      </div>

      <div className="mb-3">
        <h6 className="mb-2">Popular in {slug}</h6>
        <div className="d-flex gap-3 overflow-auto pb-2">
          {products.filter(p => p.category === slug && p.popular).map(p => (
            <div key={p.id} className="card p-2" style={{ minWidth: 200 }}>
              <img src={p.image} alt={p.name} className="img-fluid mb-2" style={{ height: 120, objectFit: 'contain' }} />
              <div className="small fw-semibold">{p.name}</div>
              <div className="fw-bold">₹{p.price}</div>
            </div>
          ))}
        </div>
      </div>

      <ProductGrid items={itemsToShow} onAdd={addItem} />
    </div>
  );
}
