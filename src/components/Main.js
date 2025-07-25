/**
 * Main.js
 * 
 * This file defines the Main component, which is a React class component
 * that serves as the main content area of the application. It includes a
 * hero section with a professional introduction, AboutList component, ProjectList component,
 * and ContactForm component.
 * 
 * Author: Daniel Hinbest
 * Date: May 20, 2025
 */

import React from "react";
import AboutList from './AboutList';
import ProjectList from './ProjectList';
import Carousel from './Carousel';
import ContactForm from './ContactForm';

// Define the Main component as a class component
class Main extends React.Component {
    // Render method to display the component
    render() {
        return (
            <main>
                {/* Hero Section */}
                <section className="hero-section py-5">
                    <div className="hero-overlay"></div>
                    <div className="container position-relative">
                        <div className="row align-items-center">
                            <div className="col-lg-6 text-start">
                                <div className="hero-content bg-white bg-opacity-85 p-4 rounded shadow">
                                    <h1 className="display-4 fw-bold mb-4 text-dark">Software Developer MSc Computer Science Student</h1>
                                    <p className="lead mb-4 text-dark">Passionate about creating high-quality software solutions with expertise in Java, C#, Python, and web technologies.</p>
                                    <div className="d-flex gap-3">
                                        <a href="daniel_hinbest_resume.pdf" className="btn btn-primary btn-lg px-4">Download Resume</a>
                                        <a href="#contact" className="btn btn-outline-secondary btn-lg px-4">Contact Me</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="profile-carousel-container shadow rounded overflow-hidden">
                                    <Carousel>
                                        <div>
                                            <img src={process.env.PUBLIC_URL + "/images/daniel.jpg"} data-position="bottom" alt="Daniel Hinbest" className="carousel-image" />
                                        </div>
                                        <div>
                                            <img src={process.env.PUBLIC_URL + "/images/daniel_convocation.jpeg"} data-position="top" alt="Convocation" className="carousel-image" />
                                        </div>
                                        <div>
                                            <img src={process.env.PUBLIC_URL + "/images/thesis_presentation.jpg"} alt="Honours Thesis Presentation" className="carousel-image" />
                                        </div>
                                        <div>
                                            <img src={process.env.PUBLIC_URL + "/images/skills.jpg"} alt="Skills Ontario Medal & Certificate" className="carousel-image" />
                                        </div>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="about-section py-5 bg-light">
                    <div className="container">
                        <h2 className="section-title text-center mb-5">About Me</h2>
                        <AboutList />
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="projects-section py-5">
                    <div className="container">
                        <h2 className="section-title text-center mb-5">Featured Projects</h2>
                        <ProjectList />
                    </div>
                </section>
                
                {/* Contact Section */}
                <section id="contact" className="contact-section py-5 bg-light">
                    <div className="container">
                        <h2 className="section-title text-center mb-5">Contact Me</h2>
                        <div className="row justify-content-center">
                            <div className="col-lg-8 mb-4">
                                <div className="card shadow border-0">
                                    <div className="card-body p-4">
                                        <h3 className="card-title fw-bold mb-4 text-center">Get in Touch</h3>
                                        <ContactForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

// Export the Main component as the default export
export default Main;