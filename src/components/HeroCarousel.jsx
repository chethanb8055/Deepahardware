import React from "react";
import { Link } from "react-router-dom";

export default function HeroCarousel() {
  return (
    <div
      id="heroCarousel"
      className="carousel slide hero-carousel mb-4"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner rounded shadow-sm">
        {/* Slide 1: Home Delivery */}
        <div className="carousel-item active">
          <div className="hero-slide d-flex flex-column justify-content-center align-items-center text-center p-5">
            <i className="bi bi-truck display-4 mb-3 text-success"></i>
            <h2 className="fw-bold">Home delivery available</h2>
            <p className="lead text-muted mb-3">
              We deliver to nearby areas — call or WhatsApp to confirm delivery
              & charges.
            </p>
            <a
              href="https://wa.me/91999XXXXXXX?text=Hi, is home delivery available to my area?"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success"
            >
              <i className="bi bi-whatsapp me-2"></i> Ask on WhatsApp
            </a>
          </div>
        </div>

        {/* Slide 2: Shop Intro */}
        <div className="carousel-item">
          <div className="hero-slide d-flex flex-column justify-content-center align-items-center text-center p-5">
            <i className="bi bi-shop display-4 mb-3 text-primary"></i>
            <h2 className="fw-bold">Deepa Hardware Shop</h2>
            <p className="lead text-muted mb-3">
              Paints, furniture and general hardware — quality products, trusted
              service.
            </p>
            <Link to="/category/general" className="btn btn-primary">
              Explore Products →
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
