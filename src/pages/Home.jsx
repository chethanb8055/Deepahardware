// src/pages/Home.jsx
import React, { useMemo, useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import products from "../data/products";
import ProductGrid from "../components/ProductGrid";
import { useCart } from "../context/CartContext";
import HeroCarousel from "../components/HeroCarousel";

const CATEGORIES = [
  { key: "general", label: "General" },
  { key: "furniture", label: "Furniture" },
  { key: "paints", label: "Paints" },
];

export default function Home() {
  const { addItem } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const defaultTab = queryParams.get("tab") || "general";

  const [activeTab, setActiveTab] = useState(defaultTab);
  const [searchQ, setSearchQ] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (activeTab !== params.get("tab")) {
      params.set("tab", activeTab);
      navigate(
        { pathname: location.pathname, search: params.toString() },
        { replace: true }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);

  const filteredItems = useMemo(() => {
    const q = searchQ.trim().toLowerCase();
    const list = products.filter((p) => p.category === activeTab);
    if (!q) return list;
    return list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.description || "").toLowerCase().includes(q) ||
        Object.values(p.specs || {})
          .join(" ")
          .toLowerCase()
          .includes(q)
    );
  }, [activeTab, searchQ]);

  const popularItems = useMemo(
    () => products.filter((p) => p.category === activeTab && p.popular),
    [activeTab]
  );

  // Carousel refs + controls
  const sliderRef = useRef(null);
  function scrollByAmount(amount) {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: amount, behavior: "smooth" });
  }
  function onPrev() {
    if (!sliderRef.current) return;
    const w = sliderRef.current.clientWidth || 300;
    scrollByAmount(-Math.round(w * 0.8));
  }
  function onNext() {
    if (!sliderRef.current) return;
    const w = sliderRef.current.clientWidth || 300;
    scrollByAmount(Math.round(w * 0.8));
  }

  return (
    <div>
      {/* Top: Carousel */}
      <div className="mb-3">
        <HeroCarousel />
      </div>

      {/* Tabs + Search beside it */}
      <div className="d-flex align-items-center gap-3 mb-3 flex-wrap">
        {/* Category Tabs */}
        <ul
          className="category-tabs mb-0"
          role="tablist"
          aria-label="Product categories"
        >
          {CATEGORIES.map((cat) => {
            const isActive = cat.key === activeTab;
            return (
              <li key={cat.key} role="presentation">
                <button
                  className={`category-tab ${isActive ? "active" : ""}`}
                  id={`tab-${cat.key}`}
                  type="button"
                  role="tab"
                  aria-controls={`panel-${cat.key}`}
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveTab(cat.key);
                    setSearchQ("");
                  }}
                >
                  <span className="tab-icon" aria-hidden="true">
                    {cat.key === "general"
                      ? "🔧"
                      : cat.key === "furniture"
                      ? "🪑"
                      : "🎨"}
                  </span>
                  <span>{cat.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Search Bar */}
        <form
          className="flex-grow-1 ms-auto"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Search products"
        >
          <div className="input-group category-search-group">
            <span
              className="input-group-text bg-white border-end-0"
              aria-hidden="true"
            >
              <i className="bi bi-search"></i>
            </span>
            <input
              type="search"
              className="form-control category-search-input"
              placeholder={`Search within ${
                CATEGORIES.find((c) => c.key === activeTab).label
              }...`}
              value={searchQ}
              onChange={(e) => setSearchQ(e.target.value)}
            />
            {searchQ ? (
              <button
                type="button"
                className="btn btn-outline-secondary category-search-clear"
                onClick={() => setSearchQ("")}
                aria-label="Clear search"
              >
                Clear
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-outline-secondary category-search-go"
                disabled
              >
                Go
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Popular slider */}
      {popularItems && popularItems.length > 0 && (
        <section className="mb-4" aria-label="Popular items">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h2 className="h6 mb-0">
              Popular in {CATEGORIES.find((c) => c.key === activeTab).label}
            </h2>
            <div>
              <button
                className="btn btn-sm btn-outline-secondary me-1"
                aria-label="Previous popular"
                onClick={onPrev}
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              <button
                className="btn btn-sm btn-outline-secondary"
                aria-label="Next popular"
                onClick={onNext}
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>

          <div
            ref={sliderRef}
            className="d-flex gap-3 overflow-auto pb-2"
            style={{ scrollBehavior: "smooth" }}
          >
            {popularItems.map((p) => (
              <div
                key={p.id}
                className="card p-2"
                style={{ minWidth: 220, maxWidth: 260 }}
              >
                <div
                  style={{
                    height: 120,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="img-fluid"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="small fw-semibold mt-2">{p.name}</div>
                <div className="fw-bold">₹{p.price}</div>
                <div className="mt-2 d-flex gap-2">
                  <button
                    className="btn btn-sm btn-outline-primary me-1"
                    onClick={() => navigate(`/product/${p.id}`)}
                  >
                    Details
                  </button>
                  <button
                    className="btn btn-sm btn-warning"
                    onClick={() => addItem(p, 1)}
                  >
                    <i className="bi bi-plus-lg"></i> Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Products grid */}
      <section>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h3 className="h6 mb-0 text-capitalize">
            {CATEGORIES.find((c) => c.key === activeTab).label}
          </h3>
          <div className="small text-muted">
            {filteredItems.length} item{filteredItems.length !== 1 ? "s" : ""}
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center text-muted py-5">No products found.</div>
        ) : (
          <ProductGrid
            items={filteredItems}
            onAdd={(product) => addItem(product, 1)}
          />
        )}
      </section>

      {/* Category quick cards */}
      <section className="row g-3 mt-4">
        {CATEGORIES.map((c) => (
          <div key={c.key} className="col-md-4">
            <div className="card p-3 h-100">
              <h5 className="mb-1">{c.label}</h5>
              <p className="small text-muted">
                Explore curated items for {c.label.toLowerCase()}.
              </p>
              <div className="mt-auto">
                <Link to={`/category/${c.key}`} className="small">
                  Explore →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
