import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="text-white py-4" style={{backgroundColor:"#232121"}}>
      <div className="container">
        <div className="row">
          {/* Newsletter Section */}
          <div className="col-md-4">
            <h5 className="fw-bold">GET 10% OFF YOUR FIRST PURCHASE</h5>
            <p>Subscribe to our newsletter to get the latest news and exclusive offers!</p>
            <div className="input-group mb-2">
              <input type="email" className="form-control" placeholder="Join Now" />
              <button className="btn btn-primary" disabled>Signup</button>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="newsletterConsent" />
              <label className="form-check-label" htmlFor="newsletterConsent">
                Yes please! I want to take part of newsletters with personalized offers and news. I approve the processing of my personal data as described below.
              </label>
            </div>
            <p className="small mt-2">Babyshop’s newsletter uses third-part cookies and other similar services to measure and gather information regarding opening frequencies, content.</p>
            <a href="#" className="text-white text-decoration-underline">Read more</a>
          </div>

          {/* Information Section */}
          <div className="col-md-4">
            <h5 className="fw-bold">INFORMATION</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">About Babyshop</a></li>
              <li><a href="#" className="text-white text-decoration-none">Sustainability</a></li>
              <li><a href="#" className="text-white text-decoration-none">Career</a></li>
              <li><a href="#" className="text-white text-decoration-none">Terms and conditions</a></li>
              <li><a href="#" className="text-white text-decoration-none">Cookies</a></li>
              <li><a href="#" className="text-white text-decoration-none">Whistleblowing</a></li>
              <li><a href="#" className="text-white text-decoration-none">Integrity Policy</a></li>
            </ul>
          </div>

          {/* Customer Service Section */}
          <div className="col-md-4">
            <h6 className="fw-bold">CUSTOMER SERVICE</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">FAQ</a></li>
              <li><a href="#" className="text-white text-decoration-none">Track order/Register</a></li>
              <li><a href="#" className="text-white text-decoration-none">Return</a></li>
              <li><a href="#" className="text-white text-decoration-none">Delivery before Christmas</a></li>
              <li><a href="#" className="text-white text-decoration-none">Delivery</a></li>
              <li><a href="#" className="text-white text-decoration-none">Returns</a></li>
              <li><a href="#" className="text-white text-decoration-none">Manuals</a></li>
              <li><a href="#" className="text-white text-decoration-none fw-bold">Contact us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;