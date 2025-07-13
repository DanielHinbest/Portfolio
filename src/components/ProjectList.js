/**
 * ProjectList.js
 * 
 * This file defines the ProjectList component, which is a React class component
 * that renders a list of Project components. Each Project component displays information
 * about a specific project, including a header, description, technologies used, link to the 
 * project's GitHub repository, and an image.
 * 
 * Author: Daniel Hinbest
 * Date: August 17, 2024
 */

import React from "react";
import Project from "./Project";

// Define the ProjectList component as a class component
class ProjectList extends React.Component {
    // Render method to display the component
    render() {
        return (
            <div className="project-list">
                {/* Project component for the QuickNote local note app */}
                <Project
                    firstDivClass="col-md-7"
                    featuretteHeader="QuickNote - Local Note-Taking App (In Progress)"
                    description="A lightweight mobile note-taking application built with Flutter, showcasing local-first architecture and cross-platform development. This project demonstrates fundamental mobile development skills including native UI development, local database management, and efficient offline-first design patterns. The application features comprehensive note management with create, edit, and delete functionality, persistent local storage, and robust offline support that works completely without internet connectivity. Built as a learning project to master Flutter fundamentals and SQLite integration, QuickNote serves as a practical foundation for understanding mobile data persistence and state management. The clean Material Design interface provides an intuitive user experience while the underlying architecture demonstrates modern mobile development patterns including state management with Provider, local storage with SQLite, and optimized database queries. The app is designed to work seamlessly across Android and iOS platforms, with zero external dependencies and complete privacy through local-only data storage."
                    secondDivClass="col-md-5"
                    image={process.env.PUBLIC_URL + "/images/no_image_available.png"}
                    //image={process.env.PUBLIC_URL + "/images/quicknote-app.png"}
                    GitHubPath="https://github.com/DanielHinbest/QuickNote"
                    imageAltText="Image not available"
                    //imageAltText="A screenshot of the QuickNote application showing the clean note-taking interface"
                    technologies={["Flutter", "Dart", "SQLite", "Cross-platform", "Local Storage"]}
                />
                {/* Project component for the Personal Task Manager */}
                <Project 
                    firstDivClass="col-md-7"
                    featuretteHeader="Personal Task Manager"
                    description="A modern desktop productivity application built with WPF and C#, featuring comprehensive task management with categorization and priority tracking. The application uses SQLite database with Entity Framework Core for reliable data persistence, implementing a clean service layer architecture. Users can create, edit, and delete tasks with detailed descriptions, set priority levels (High, Medium, Low), organize tasks by custom categories, and track due dates. The application features a responsive WPF interface with real-time updates, visual priority indicators, and user-friendly data validation."
                    secondDivClass="col-md-5"
                    image={process.env.PUBLIC_URL + "/images/personal-task-manager.png"}
                    GitHubPath="https://github.com/DanielHinbest/Personal-Task-Manager"
                    imageAltText="A screenshot of the Personal Task Manager desktop application showing task management interface"
                    technologies={["C#", "WPF", ".NET", "SQLite", "Entity Framework Core", "Desktop Development"]}
                />
                {/* Project component for the Personal Finance Tracker */}
                <Project 
                    firstDivClass="col-md-7"
                    featuretteHeader="Personal Finance Tracker"
                    description="A secure, multi-user personal finance tracker web application built with Flask and SQLite. Features user authentication with password hashing, expense tracking by category, spending analytics, and comprehensive reporting. Users can register accounts, securely manage personal expenses, view detailed spending reports, and monitor financial trends through an intuitive web interface. The containerized application demonstrates full-stack development skills including user authentication, database relationships, and secure session management."
                    secondDivClass="col-md-5"
                    image={process.env.PUBLIC_URL + "/images/personal-finance-tracker.png"}
                    GitHubPath="https://github.com/DanielHinbest/Personal-Finance-Tracker"
                    imageAltText="A screenshot of the Personal Finance Tracker expense management interface with user authentication"
                    technologies={["Flask", "Python", "SQLite", "HTML/CSS", "Docker", "Authentication"]}
                />
                {/* Project component for the Capstone Project: Groceries To Go */}
                <Project
                    firstDivClass="col-md-7"
                    featuretteHeader="Capstone Project: Groceries To Go"
                    description="Groceries To Go was developed as a 12-week capstone project with two other team members in the final semester of Computer Programming and Analysis. The application provides users access to local grocery stores in Durham Region and allows them to place orders for home delivery, featuring a robust backend system for order management."
                    secondDivClass="col-md-5"
                    image={process.env.PUBLIC_URL + "/images/gtg.jpg"}
                    GitHubPath="https://www.github.com/DanielHinbest/GroceriesToGo"
                    imageAltText="A photo of the Groceries To Go cart view"
                    technologies={["Java", "Spring Framework", "MySQL", "MVC Architecture"]}
                />

                {/* Project component for the Database Application: McLaughlin University */}
                <Project
                    firstDivClass="col-md-7"
                    featuretteHeader="Database Application: McLaughlin University"
                    description="McLaughlin University was developed in a Database Development class with a team of four. The application was designed to allow the donation committee to add donations and view the overall funding for each campus and program, as well as generate customized reports for users. This project demonstrates database design, implementation and reporting capabilities."
                    secondDivClass="col-md-5"
                    image={process.env.PUBLIC_URL + "/images/mclaughlin_uni.jpg"}
                    GitHubPath="https://www.github.com/DanielHinbest/McLaughlinUniversity"
                    imageAltText="A photo of the McLaughlin University home screen"
                    technologies={["C#", "WPF", "SQL Server", "Database Design"]}
                />
            </div>
        );
    }
}

// Export the ProjectList component as the default export
export default ProjectList;