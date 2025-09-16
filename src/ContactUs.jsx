import React from 'react';
import './ContactUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// ✅ Toast Import
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("✅ Your message has been sent successfully!", {
      position: "top-right",
      autoClose: 2500,
    });
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">📞 Sizzle&Share :: Contact Us</h2>

      {/* Intro */}
      <p className="contact-intro">
        At <strong>Sizzle&Share</strong>, we value our customers and strive to provide the best service possible. 
        Whether you have a question about your order, need help with payments, or want to collaborate with us — 
        we’re here to assist you.
      </p>

      <div className="contact-grid">
        {/* Contact Info */}
        <div className="contact-info">
          <h3>📍 Head Office</h3>
          <p>Sizzle&Share Pvt. Ltd., 3rd Floor, Tech Park, Bengaluru, India</p>

          <h3>☎ Customer Support</h3>
          <p>+91 79816 78161</p>
          <p>support@Sizzle&Share.com</p>
          <p><strong>Hours:</strong> Mon - Sat (9:00 AM - 8:00 PM)</p>

          <h3>🏢 Other Enquiries</h3>
          <p><strong>Corporate:</strong> corporate@sizzleShare.com</p>
          <p><strong>Media/Press:</strong> press@sizzleshare.com</p>
          <p><strong>Careers:</strong> hr@sizzleshare.com</p>

          <h3>🌐 Follow Us</h3>
          <ul className="contact-social">
            <li><a href="https://facebook.com/Sizzle&Share" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </a></li>
            <li><a href="https://twitter.com/Sizzle&Share" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a></li>
            <li><a href="https://instagram.com/Sizzle&Share" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a></li>
            <li><a href="https://linkedin.com/company/Sizzle&Share" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a></li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3>📩 Send us a message</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Full Name" required />
            <input type="email" placeholder="Your Email Address" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* FAQ / Quick Help */}
      <div className="contact-faq">
        <h3>💡 Quick Help</h3>
        <p>❓ <strong>Track Orders:</strong> Check the "My Orders" section in your account.</p>
        <p>❓ <strong>Returns & Refunds:</strong> Go to "My Orders" → Select Item → Request Return.</p>
        <p>❓ <strong>Payments:</strong> Email <em>payments@Sizzle&Share.com</em> for instant help.</p>
      </div>

      {/* Map Section */}
      <div className="contact-map">
        <h3>📍 Find Us</h3>
        <iframe
          title="Sizzle&Share Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.137048243224!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c16f5f8f%3A0x91e3dbbb6f123456!2sBengaluru!5e0!3m2!1sen!2sin!4v1631700000000!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* ✅ Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default ContactUs;
