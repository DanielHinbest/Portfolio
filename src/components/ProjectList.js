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
                {/* Project component for the ChatFlow messaging app */}
                <Project
                    firstDivClass="col-md-7"
                    featuretteHeader="ChatFlow - Real-time Messaging App (In Progress)"
                    description="A cross-platform messaging application currently in development, built with Flutter and Firebase to demonstrate modern mobile development practices and cost-effective deployment strategies. This project showcases real-time chat functionality, user authentication, and message persistence across mobile and web platforms while operating entirely within Firebase's free Spark plan. The application features comprehensive messaging capabilities including real-time chat with instant message delivery, persistent message history, typing indicators, and offline synchronization. User management includes secure email authentication, profile management with initial-based avatars, and real-time presence indicators. The cross-platform architecture supports native iOS and Android applications alongside a Progressive Web App, all with responsive design and platform-specific UI optimizations."
                    secondDivClass="col-md-5"
                    image={process.env.PUBLIC_URL + "/images/no_image_available.png"}
                    //image={process.env.PUBLIC_URL + "/images/chatflow-app.png"}
                    GitHubPath="https://github.com/DanielHinbest/chatflow"
                    imageAltText="Image not available"
                    //imageAltText="A screenshot of the ChatFlow messaging application showing the real-time chat interface"
                    technologies={["Flutter", "Dart", "Firebase", "Firestore", "Firebase Auth", "Cross-Platform Development"]}
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
                {/* Project component for the Software Quality Assurance Project */}
                <Project 
                    firstDivClass="col-md-7"
                    featuretteHeader="Software Quality Assurance Project"
                    description="The Software Quality Assurance project was developed over the course of a 12 week semester at Ontario Tech University in my second full-time semester. This console-based game distribution software (similar to Steam) allows users to buy and sell games, featuring a C++ front end with a Java/Python backend. The project showcases both black box and white box testing methodologies in a simulated work environment."
                    secondDivClass="col-md-5"
                    image={process.env.PUBLIC_URL + "/images/sqa.png"}
                    GitHubPath="https://github.com/DanielHinbest/csci3060"
                    imageAltText="A photo of the Software Quality Assurance project"
                    technologies={["C++", "Java", "Software Testing", "Quality Assurance"]}
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

                {/* Project component for the Web Development: Java Web Application */}
                <Project
                    firstDivClass="col-md-7"
                    featuretteHeader="Web Development: Java Web Application"
                    description="This Java web application was developed in the fourth semester Web Development course, providing my first experience using Java and JSP for web development. The project features a PostgreSQL database connection and was designed to run in Apache Tomcat 8.0, demonstrating knowledge of Java Servlets, JSP pages, and database connectivity."
                    secondDivClass="col-md-5"
                    image={process.env.PUBLIC_URL + "/images/webd4201.jpg"}
                    GitHubPath="https://www.github.com/DanielHinbest/Java-Web-Development"
                    imageAltText="A photo of the registration page"
                    technologies={["Java", "JSP", "Servlets", "PostgreSQL", "Apache Tomcat"]}
                />
            </div>
        );
    }
}

// Export the ProjectList component as the default export
export default ProjectList;