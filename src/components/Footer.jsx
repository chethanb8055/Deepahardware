import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer bg-light border-top mt-5 pt-4 pb-3">
      <div className="container">
        <div className="row gy-4">
          {/* Branding */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-2">Deepa Hardware Shop</h5>
            <p className="small text-muted mb-2">
              Paints, furniture and general hardware — quality products, trusted
              service.
            </p>
            <p className="small mb-0">
              <i className="bi bi-whatsapp me-2 text-success"></i>
              WhatsApp: +91-944886798
            </p>
            <p className="small mb-0">
              <i className="bi bi-telephone me-2"></i> Phone: +91-9242668244,
              +91-9448867988
            </p>
            <p className="small mb-0">
              <i className="bi bi-envelope me-2"></i> Email:
              info@deepahardware.com
            </p>
          </div>

          {/* Navigation links */}
          <div className="col-md-4">
            <h6 className="fw-semibold mb-2">Quick Links</h6>
            <ul className="list-unstyled small">
              <li>
                <Link
                  to="/category/general"
                  className="text-decoration-none text-muted"
                >
                  General
                </Link>
              </li>
              <li>
                <Link
                  to="/category/furniture"
                  className="text-decoration-none text-muted"
                >
                  Furniture
                </Link>
              </li>
              <li>
                <Link
                  to="/category/paints"
                  className="text-decoration-none text-muted"
                >
                  Paints
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-decoration-none text-muted">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div className="col-md-4">
            <h6 className="fw-semibold mb-2">Connect with us</h6>
            <div className="d-flex gap-3">
              <a
                href="https://wa.me/91999XXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="text-success fs-5"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
              <a href="#" className="text-primary fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-danger fs-5">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="text-center small text-muted mt-4 pt-3 border-top">
          © {new Date().getFullYear()} Deepa Hardware Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
