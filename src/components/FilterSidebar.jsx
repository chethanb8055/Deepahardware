import React from "react";

export default function FilterSidebar() {
  return (
    <div className="filter-sidebar card shadow-sm">
      <div className="card-body p-0">
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex align-items-center gap-2 fw-semibold">
            <i className="bi bi-funnel"></i> Filter
          </li>

          <li className="list-group-item d-flex align-items-center gap-2">
            <i className="bi bi-grid"></i> Categories
          </li>

          <li className="list-group-item d-flex align-items-center gap-2">
            <i className="bi bi-tags"></i> Price Range
          </li>

          <li className="list-group-item d-flex align-items-center gap-2">
            <i className="bi bi-building"></i> Brands
          </li>

          <li className="list-group-item d-flex align-items-center gap-2">
            <i className="bi bi-cart"></i> Products
          </li>

          <li className="list-group-item d-flex align-items-center gap-2">
            <i className="bi bi-shop"></i> Serajuts
          </li>
        </ul>
      </div>
    </div>
  );
}
