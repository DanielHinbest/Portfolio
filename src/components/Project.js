/**
 * Project.js
 * 
 * This file defines the Project component, which is a React class component
 * that displays a project card with a header, description, technologies used,
 * links to the project's GitHub repository, and an image.
 * 
 * Props:
 * - firstDivClass: The CSS class for the first div element.
 * - featuretteHeader: The header text for the project.
 * - description: The description text for the project.
 * - GitHubPath: The URL to the project's GitHub repository.
 * - secondDivClass: The CSS class for the second div element.
 * - image: The source URL for the image.
 * - imageAltText: The alt text for the image.
 * - technologies: Array of technologies used in the project (optional).
 * - customButton: Optional custom button to replace GitHub link.
 * 
 * Author: Daniel Hinbest
 * Date: August 17, 2024
 */

import React from "react";

// Define the Project component as a class component
class Project extends React.Component {
    // Render method to display the component
    render() {
        const { technologies, customButton } = this.props;
        
        return (
            <div className="project-item mb-5">
                <div className="card shadow border-0 h-100">
                    <div className="row g-0">
                        <div className={this.props.secondDivClass}>
                            <div className="project-image-container">
                                <img className="project-image img-fluid h-100 object-fit-cover" 
                                     src={this.props.image} 
                                     alt={this.props.imageAltText}/>
                            </div>
                        </div>
                        <div className={this.props.firstDivClass}>
                            <div className="card-body p-4 d-flex flex-column h-100">
                                {/* Project header with dynamic content */}
                                <h3 className="card-title fw-bold">{this.props.featuretteHeader}</h3>
                                
                                {/* Project description with dynamic content */}
                                <p className="card-text">{this.props.description}</p>
                                
                                {/* Technologies used section if provided */}
                                {technologies && technologies.length > 0 && (
                                    <div className="mb-3">
                                        <h5 className="fw-bold mb-2">Technologies Used:</h5>
                                        <div className="d-flex flex-wrap gap-2">
                                            {technologies.map((tech, index) => (
                                                <span key={index} className="badge bg-primary text-white rounded-pill px-3 py-2">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                
                                {/* Link to the project's GitHub repository or custom button */}
                                <div className="mt-auto">
                                    {customButton ? (
                                        customButton
                                    ) : this.props.GitHubPath ? (
                                        <a className="btn btn-primary" href={this.props.GitHubPath} target="_blank" rel="noopener noreferrer">
                                            <i className="fab fa-github me-2"></i>View on GitHub
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Export the Project component as the default export
export default Project;