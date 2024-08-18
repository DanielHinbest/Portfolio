/**
 * Footer.js
 * 
 * This file defines the Footer component, which is a React class component
 * that displays a footer with the author's name and the current year.
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
      <footer className="container">
        {/* Display the author's name and the current year */}
        <p>Daniel Hinbest &middot; {this.getDate()}</p>
      </footer>
    );
  }
}

// Export the Footer component as the default export
export default Footer;