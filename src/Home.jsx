import React, { useState, useEffect } from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const testimonials = [
    {
      text: "Amazing quality veggies and super fast delivery. Highly recommend!",
      name: "Priya R.",
    },
    {
      text: "Best place to get dairy products. Fresh curd & milk every time.",
      name: "Arjun K.",
    },
    {
      text: "I love their chocolates collection 😍 my kids are always happy!",
      name: "Meera S.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Show "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowTop(true);
      else setShowTop(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Motion Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const fadeIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="home-container">
      {/* ✅ Hero Section with Video Background */}
      <header className="home-hero">
        <video autoPlay muted loop className="hero-video">
          <source src="/videos/sizzle-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <motion.div
          className="hero-overlay"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="hero-title"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Welcome to Sizzle&Spice
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Fresh groceries, dairy & more delivered right at your doorstep!
          </motion.p>
          <motion.button
            className="shop-now-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/veg")}
          >
            Start Shopping
          </motion.button>
        </motion.div>
      </header>

      {/* ✅ Hero Content Section */}
      <section className="hero">
        <motion.div
          className="hero-text"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1>
            Take a taste <br /> Come join us.
          </h1>
          <p className="hero-subtitle">
            Life is so endlessly delicious. From fresh veggies to dairy,
            chocolates, and more — explore endless options that make your meals
            delightful.
          </p>
          <motion.button
            className="explore-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/veg")}
          >
            Explore Now
          </motion.button>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="public/images/main.jpeg" alt="Food plate" />
        </motion.div>
      </section>

      {/* ✅ Features Section */}
      <motion.section
        className="features"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          {
            img: "/images/allvegies.jpeg",
            title: "Fresh Veggies",
            desc: "Organic, healthy and straight from the farm.",
            link: "/veg",
          },
          {
            img: "/images/milkpro.jpeg",
            title: "Dairy Products",
            desc: "Pure milk, ghee, curd & all fresh dairy items.",
            link: "/milk",
          },
          {
            img: "/images/fruitjuices.jpeg",
            title: "Refreshing Drinks",
            desc: "Juices, shakes & smoothies to refresh your day.",
            link: "/drinks",
          },
          {
            img: "/images/allchocolates.jpeg",
            title: "Sweet Chocolates",
            desc: "Delicious chocolates for every mood & occasion.",
            link: "/chocolates",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="feature-card"
            variants={fadeUp}
            custom={i}
            whileHover={{ scale: 1.05, rotate: 1 }}
            onClick={() => navigate(item.link)}
          >
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* ✅ Why Choose Us */}
      <motion.section
        className="why-choose"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Why Choose MyStore?</h2>
        <div className="why-grid">
          {[
            { icon: "🌱", title: "100% Fresh", desc: "Best farm-fresh products." },
            { icon: "🚚", title: "Fast Delivery", desc: "Delivered within hours." },
            { icon: "💳", title: "Easy Payments", desc: "Secure & hassle-free." },
            { icon: "⭐", title: "Trusted by 10,000+", desc: "Loved across India." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="why-card"
            >
              <h4>{item.icon} {item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ✅ Testimonials */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <motion.div
          key={current}
          className="testimonial"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p>“{testimonials[current].text}”</p>
          <h4>- {testimonials[current].name}</h4>
        </motion.div>
      </section>

      {/* ✅ Offers Section */}
      <motion.section
        className="offers"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Special Offers</h2>
        <div className="offer-grid">
          {[
            "🎉 Flat 20% OFF on Fresh Veggies",
            "🥛 Buy 2L Milk, Get 1 Curd Free",
            "🍫 Chocolates Combo Packs @ ₹199",
          ].map((offer, i) => (
            <motion.div
              key={i}
              className="offer-card"
              whileHover={{ scale: 1.08, rotate: -1 }}
            >
              {offer}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ✅ CTA Footer */}
      <motion.section
        className="cta-footer"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Craving Freshness Every Day?</h2>
        <p>
          Discover top-quality groceries, dairy delights, and sweet treats — all
          delivered quickly to your home.
        </p>
        <motion.button
          className="cta-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Offers & Save Big!
        </motion.button>
      </motion.section>

      {/* ✅ Back-to-Top Button */}
      {showTop && (
        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.2 }}
        >
          ↑
        </motion.button>
      )}
    </div>
  );
}

export default Home;
