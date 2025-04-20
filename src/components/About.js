/**
 * About.js
 * 
 * This file defines the About component, which is a React class component
 * that displays a card with an icon, a section title, a paragraph, and an optional button.
 * The content is dynamically passed as props to the component.
 * 
 * Props:
 * - icon: The Font Awesome icon class to be displayed.
 * - sectionTitle: The title of the section.
 * - paragraph: The content of the paragraph, which can include HTML.
 * - button: A button element to be displayed (optional).
 * 
 * Author: Daniel Hinbest
 * Date: August 17, 2024
 */

import React from "react";

// Define the About component as a class component
class About extends React.Component {
    // Render method to display the component
    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card h-100 shadow border-0">
                    <div className="card-body p-4">
                        {/* Icon element with dynamic class */}
                        <div className="feature-icon mb-3">
                            <i className={`${this.props.icon} fa-2x text-primary`}></i>
                        </div>

                        {/* Section title with dynamic content */}
                        <h3 className="card-title fw-bold mb-3">{this.props.sectionTitle}</h3>

                        {/* Paragraph with dynamic content, allowing HTML */}
                        <div className="card-text about-text" dangerouslySetInnerHTML={{ __html: this.props.paragraph }}></div>

                        {/* Button element passed as a prop, if provided */}
                        {this.props.button && (
                            <div className="mt-4">
                                {this.props.button}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

// Export the About component as the default export
export default About;