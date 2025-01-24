/**
 * Header.js
 * 
 * This file defines the Header component, which is a React class component
 * that displays a navigation bar with links to GitHub, LinkedIn, and a resume,
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
            <header className="top">
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        {/* Brand name linking to the home page */}
                        <a className="navbar-brand" href="./">Daniel Hinbest</a>
                        {/* Button for toggling the navigation bar on smaller screens */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* Collapsible navigation bar */}
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                {/* Link to GitHub */}
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.github.com/DanielHinbest">GitHub</a>
                                </li>
                                {/* Link to LinkedIn */}
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.linkedin.com/in/daniel-hinbest">LinkedIn</a>
                                </li>
                                {/* Link to resume */}
                                <li className="nav-item">
                                    <a className="nav-link" href="daniel_hinbest_resume.pdf">Resume</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                {/* Email address */}
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Email: daniel.hinbest@proton.me</a>
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