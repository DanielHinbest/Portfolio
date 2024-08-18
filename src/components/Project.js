/**
 * Project.js
 * 
 * This file defines the Project component, which is a React class component
 * that displays a project featurette with a header, description, link to the
 * project's GitHub repository, and an image.
 * 
 * Props:
 * - firstDivClass: The CSS class for the first div element.
 * - featuretteHeader: The header text for the featurette.
 * - description: The description text for the featurette.
 * - GitHubPath: The URL to the project's GitHub repository.
 * - secondDivClass: The CSS class for the second div element.
 * - image: The source URL for the image.
 * - imageAltText: The alt text for the image.
 * 
 * Author: Daniel Hinbest
 * Date: August 17, 2024
 */

import React from "react";

// Define the Project component as a class component
class Project extends React.Component {
    // Render method to display the component
    render() {
        return (
            <div>
                <hr className="featurette-divider" />

                <div className="row featurette">
                    <div className={this.props.firstDivClass}>
                        {/* Featurette header with dynamic content */}
                        <h2 className="featurette-heading">{this.props.featuretteHeader}</h2>
                        {/* Featurette description with dynamic content */}
                        <p className="lead">{this.props.description}</p>
                        {/* Link to the project's GitHub repository */}
                        <p><a className="btn btn-secondary" href={this.props.GitHubPath}>View code &raquo;</a></p>
                    </div>
                    <div className={this.props.secondDivClass}>
                        {/* Image with dynamic source and alt text */}
                        <img className="featurette-image img-fluid mx-auto" src={this.props.image} alt={this.props.imageAltText}/>
                    </div>
                </div>
            </div>
        );
    }
}

// Export the Project component as the default export
export default Project;