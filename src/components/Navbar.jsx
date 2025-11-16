import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const BUSINESS_PHONE = "91999XXXXXXX"; // replace with your number

export default function Navbar() {
  const navigate = useNavigate();
  const { cart } = useCart();
  const totalCount = cart.items.reduce((s, i) => s + i.qty, 0);

  // WhatsApp quick links
  function whatsappLink() {
    const text = encodeURIComponent(
      "Hello Deepa Hardware, I need assistance with an order."
    );
    return `https://wa.me/${BUSINESS_PHONE}?text=${text}`;
  }
  function deliveryLink() {
    const text = encodeURIComponent(
      "Hi, is home delivery available to my area? Please advise."
    );
    return `https://wa.me/${BUSINESS_PHONE}?text=${text}`;
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white navbar-pro shadow-sm sticky-top">
        <div className="container">
          <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
            <div>
              <image
                src="/Logo.png"
                alt="Deepa Hardware Shop"
                style={{ height: 40 }}
              />
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item d-none d-lg-block">
                <NavLink to="/category/general" className="nav-link">
                  General
                </NavLink>
              </li>
              <li className="nav-item d-none d-lg-block">
                <NavLink to="/category/furniture" className="nav-link">
                  Furniture
                </NavLink>
              </li>
              <li className="nav-item d-none d-lg-block">
                <NavLink to="/category/paints" className="nav-link">
                  Paints
                </NavLink>
              </li>

              <li className="nav-item ms-2">
                <a
                  className="btn delivery-pill d-flex align-items-center gap-2"
                  href={deliveryLink()}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-truck fs-5"></i>
                  <span className="d-none d-md-inline">Home delivery</span>
                </a>
              </li>

              <li className="nav-item ms-2">
                <a
                  className="btn btn-success d-flex align-items-center gap-2 btn-whatsapp"
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-whatsapp fs-5"></i>
                  <span className="d-none d-md-inline">WhatsApp</span>
                </a>
              </li>

              <li className="nav-item ms-2">
                <button
                  className="btn btn-outline-secondary position-relative btn-cart"
                  onClick={() => navigate("/cart")}
                  aria-label="Open cart"
                >
                  <i className="bi bi-cart fs-5"></i>
                  {totalCount > 0 && (
                    <span className="badge bg-danger rounded-pill cart-badge">
                      {totalCount}
                    </span>
                  )}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Offcanvas: mobile menu */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileMenuLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled mb-4">
            <li className="mb-2">
              <NavLink
                to="/category/general"
                className="d-block text-decoration-none"
                data-bs-dismiss="offcanvas"
              >
                General
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/category/furniture"
                className="d-block text-decoration-none"
                data-bs-dismiss="offcanvas"
              >
                Furniture
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/category/paints"
                className="d-block text-decoration-none"
                data-bs-dismiss="offcanvas"
              >
                Paints
              </NavLink>
            </li>
          </ul>

          <a
            href={deliveryLink()}
            className="btn delivery-pill w-100 d-flex align-items-center justify-content-center gap-2 mb-2"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-truck"></i> Home delivery
          </a>

          <a
            href={whatsappLink()}
            className="btn btn-success w-100 d-flex align-items-center justify-content-center gap-2 mb-2"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-whatsapp"></i> Contact on WhatsApp
          </a>

          <button
            className="btn btn-outline-secondary w-100"
            onClick={() => {
              document.querySelector(".btn-cart")?.click();
            }}
          >
            <i className="bi bi-cart me-2"></i> View Cart
            {totalCount > 0 && (
              <span className="badge bg-danger rounded-pill ms-2">
                {totalCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
