import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap"; // ✅ Import Bootstrap Carousel

function AboutUs() {
  return (
    <div className="about-us">
      {/* Hero Section */}
      <div className="bg-success text-white text-center py-5">
        <h1 className="display-4 fw-bold">About Sizzle&Spice</h1>
        <p className="lead">
          Delivering freshness, quality, and happiness to your doorstep.
        </p>
      </div>

      {/* About Section */}
      <div className="container my-5">
        <div className="row align-items-center">
          {/* ✅ Carousel instead of single image */}
          <div className="col-md-6 mb-4">
            <Carousel fade interval={2500}>
              <Carousel.Item>
                <img
                  src="images/allvegies.jpeg"
                  className="d-block w-100 rounded shadow"
                  alt="Fresh Vegetables"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="images/allchocolates.jpeg"
                  className="d-block w-100 rounded shadow"
                  alt="Chocolates"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="public/images/fruitjuices.jpeg"
                  className="d-block w-100 rounded shadow"
                  alt="Fresh Fruits"
                />
              </Carousel.Item>
            </Carousel>
          </div>

          <div className="col-md-6">
            <h2 className="text-success mb-3">Who We Are</h2>
            <p className="text-muted fs-5">
              Sizzle&Spice is India’s largest online grocery store, offering over
              40,000 products from 1,000+ brands. With a customer base of over
              10 million, we pride ourselves on providing fresh produce, pantry
              essentials, and everyday items with unmatched convenience.
            </p>
            <p className="text-muted fs-5">
              From vegetables and fruits to personal care and household
              essentials, we make sure that everything you need is delivered
              straight to your door — quickly, affordably, and reliably.
            </p>
          </div>
        </div>
      </div>

      {/* Mission, Values, Why Choose Us */}
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-md-4">
            <h3 className="text-primary">🌟 Our Mission</h3>
            <p className="text-muted">
              To simplify grocery shopping with high-quality products,
              delivered on time, at the best prices.
            </p>
          </div>
          <div className="col-md-4">
            <h3 className="text-primary">💚 Our Values</h3>
            <ul className="list-unstyled text-muted">
              <li>✔️ Freshness you can trust</li>
              <li>✔️ Customer-first approach</li>
              <li>✔️ Affordable pricing</li>
              <li>✔️ Sustainable sourcing</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="text-primary">🚀 Why Choose Us?</h3>
            <p className="text-muted">
              With flexible delivery slots, an easy-to-use app, and the widest
              range of products, we’re your one-stop solution for groceries.
            </p>
          </div>
        </div>
      </div>

      {/* Closing Note */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <div className="alert alert-success shadow-sm d-inline-block px-5 py-3">
            🌱 Sizzle&Spice — Bringing freshness, quality, and happiness to your home,
            every single day!
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
