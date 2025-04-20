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
                {/* Project component for Honours Thesis */}
                <Project 
                    firstDivClass="col-md-7"
                    featuretteHeader="Exploring Student White-Box Testing Patterns in a Software Quality Assurance Course"
                    description="My undergraduate thesis research addresses a critical gap in computer science education: the lack of adequate software testing skills among new graduates. Working with the Software Engineering & Education Lab (SEER Lab) under the supervision of Dr. Jeremy Bradbury and Dr. Michael Miljanovic, I conducted a formal study examining how students approach software testing tasks. With approval from Ontario Tech University's Research Ethics Board, I collected and analyzed data from 59 students in CSCI 3060U - Software Quality Assurance during Winter 2025. The study included both surveys and hands-on testing activities that were monitored using IDE tracking software. Key findings revealed that students tend to focus heavily on code editing but often neglect consistent test execution—an insight that could inform improvements in how testing is taught in undergraduate programs."
                    secondDivClass="col-md-5"
                    image={process.env.PUBLIC_URL + "/images/thesis_presentation.jpg"}
                    GitHubPath=""
                    customButton={<a className="btn btn-primary" href="daniel_hinbest_honours_thesis.pdf"><i className="fas fa-file-pdf me-2"></i>View Thesis Paper</a>}
                    imageAltText="Daniel Hinbest presenting honours thesis"
                    technologies={["Python", "Data Analysis", "Software Testing", "Research Methods", "Educational Technology"]}
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