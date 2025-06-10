/**
 * Footer.js
 * 
 * This file defines the Footer component, which is a React class component
 * that displays a modern footer with the author's name, the current year,
 * social media links, and a brief tagline.
 * 
 * Author: Daniel Hinbest
 * Date: August 17, 2024
 */

import React from "react";

// Define the Footer component as a class component
class Footer extends React.Component {
  // Method to get the current year
  getDate() {
    let date = new Date().getFullYear();
    return date;
  }

  // Render method to display the component
  render() {
    return (
      <footer className="footer py-4 bg-dark text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-start">
              <p className="mb-2">Daniel Hinbest &copy; {this.getDate()}</p>
              <p className="small text-muted">Software Developer & Computer Science Student</p>
            </div>
            <div className="col-lg-4 my-3 my-lg-0">
              <div className="social-icons">
                <a className="btn btn-outline-light btn-social mx-1" href="https://www.github.com/DanielHinbest" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a className="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/daniel-hinbest" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                {/* <a className="btn btn-outline-light btn-social mx-1" href="mailto:danielhinbest@rogers.com" aria-label="Email">
                  <i className="far fa-envelope"></i>
                </a> */}
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <a className="link-light text-decoration-none me-3" href="#!">Privacy Policy</a>
              <a className="link-light text-decoration-none" href="#!">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

// Export the Footer component as the default export
export default Footer;