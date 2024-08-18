/**
 * About.js
 * 
 * This file defines the About component, which is a React class component
 * that displays an image, a section title, a paragraph, and a button. The content
 * is dynamically passed as props to the component.
 * 
 * Props:
 * - imagePath: The path to the image to be displayed.
 * - sectionTitle: The title of the section.
 * - paragraph: The content of the paragraph, which can include HTML.
 * - button: A button element to be displayed.
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
            <div className="col-lg-6">
                {/* Image element with dynamic source and alt text */}
                <img width="140" height="140" focusable="false" src={this.props.imagePath} alt=""/>

                {/* Section title with dynamic content */}
                <h2>{this.props.sectionTitle}</h2>

                {/* Paragraph with dynamic content, allowing HTML */}
                <p dangerouslySetInnerHTML={{ __html: this.props.paragraph }}></p>

                {/* Button element passed as a prop */}
                {this.props.button}
            </div>
        );
    }
}

// Export the About component as the default export
export default About;