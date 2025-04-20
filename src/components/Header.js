/**
 * Header.js
 * 
 * This file defines the Header component, which is a React class component
 * that displays a modern navigation bar with links to GitHub, LinkedIn, and a resume,
 * as well as an email address.
 * 
 * Author: Daniel Hinbest
 * Date: August 17, 2024
 */

import React from "react";

// Define the Header component as a class component
class Header extends React.Component {
    // Render method to display the component
    render() {
        return (
            <header className="site-header">
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                    <div className="container">
                        {/* Brand name linking to the home page with more visible styling */}
                        <a className="navbar-brand fw-bold" href="./">
                            <span className="text-light bg-primary px-2 py-1 rounded">Daniel</span> <span className="text-light">Hinbest</span>
                        </a>
                        {/* Button for toggling the navigation bar on smaller screens */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* Collapsible navigation bar */}
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                {/* Link to GitHub with icon */}
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.github.com/DanielHinbest">
                                        <i className="fab fa-github me-1"></i>GitHub
                                    </a>
                                </li>
                                {/* Link to LinkedIn with icon */}
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.linkedin.com/in/daniel-hinbest">
                                        <i className="fab fa-linkedin me-1"></i>LinkedIn
                                    </a>
                                </li>
                                {/* Link to resume with icon */}
                                <li className="nav-item">
                                    <a className="nav-link" href="daniel_hinbest_resume.pdf">
                                        <i className="far fa-file-pdf me-1"></i>Resume
                                    </a>
                                </li>
                                {/* Email address with icon */}
                                <li className="nav-item">
                                    <a className="nav-link" href="mailto:daniel.hinbest@proton.me">
                                        <i className="far fa-envelope me-1"></i>Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

// Export the Header component as the default export
export default Header;