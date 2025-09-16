import React, { useState, useEffect } from "react";
import "./Home.css";
import { motion } from "framer-motion";

function Home() {
  
  const testimonials = [
    { text: "Amazing quality veggies and super fast delivery. Highly recommend!", name: "Priya R." },
    { text: "Best place to get dairy products. Fresh curd & milk every time.", name: "Arjun K." },
    { text: "I love their chocolates collection 😍 my kids are always happy!", name: "Meera S." },
  ];
  
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="home-container">

      {/* Hero Section with Video Background */}
      <header className="home-hero">
        <video autoPlay muted loop className="hero-video">
          <source src="/videos/sizzle-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay">
          <h1 className="hero-title">Welcome to Sizzle&Spice</h1>
          <p className="hero-subtitle">
            Fresh groceries, dairy & more delivered right at your doorstep!
          </p>
          <button className="shop-now-btn">Start Shopping</button>
        </div>
      </header>

      {/* Features Section */}
      <section className="features">
        <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
          <img src="/images/allvegies.jpeg" alt="Veg" />
          <h3>Fresh Veggies</h3>
          <p>Organic, healthy and straight from the farm.</p>
        </motion.div>
        <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
          <img src="/images/milkpro.jpeg" alt="Milk" />
          <h3>Dairy Products</h3>
          <p>Pure milk, ghee, curd & all fresh dairy items.</p>
        </motion.div>
        <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
          <img src="/images/fruitjuices.jpeg" alt="Drinks" />
          <h3>Refreshing Drinks</h3>
          <p>Juices, shakes & smoothies to refresh your day.</p>
        </motion.div>
        <motion.div className="feature-card" whileHover={{ scale: 1.05 }}>
          <img src="/images/allchocolates.jpeg" alt="Chocolates" />
          <h3>Sweet Chocolates</h3>
          <p>Delicious chocolates for every mood & occasion.</p>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Choose MyStore?</h2>
        <div className="why-grid">
          <div>
            <h4>🌱 100% Fresh</h4>
            <p>We handpick only the best farm-fresh products for you.</p>
          </div>
          <div>
            <h4>🚚 Fast Delivery</h4>
            <p>Get your groceries delivered to your doorstep within hours.</p>
          </div>
          <div>
            <h4>💳 Easy Payments</h4>
            <p>Multiple payment options – secure and hassle-free checkout.</p>
          </div>
          <div>
            <h4>⭐ Trusted by 10,000+</h4>
            <p>Loved by thousands of happy customers across India.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-carousel">
          <motion.div
            key={current}
            className="testimonial"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <p>“{testimonials[current].text}”</p>
            <h4>- {testimonials[current].name}</h4>
          </motion.div>
        </div>
      </section>

      {/* Offers */}
      <section className="offers">
        <h2>Special Offers</h2>
        <div className="offer-grid">
          <div className="offer-card">🎉 Flat 20% OFF on Fresh Veggies</div>
          <div className="offer-card">🥛 Buy 2L Milk, Get 1 Curd Free</div>
          <div className="offer-card">🍫 Chocolates Combo Packs @ ₹199</div>
        </div>
      </section>
            {/* Call-to-Action Footer */}
      <section className="cta-footer">
        <h2>Craving Freshness Every Day?</h2>
        <p>Discover top-quality groceries, dairy delights, and sweet treats — all delivered quickly to your home.</p>
        <button className="cta-btn">Explore Offers & Save Big!</button>
      </section>
    </div>

  );
}

export default Home;
