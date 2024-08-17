import React from "react";
import Project from "./Project";

class ProjectList extends React.Component {
    render() {
        return (
            <div>
                <Project
                    firstDivClass="col-md-6"
                    featuretteHeader="Capstone Project: Groceries To Go"
                    description="Groceries To Go was developed as a 12-week capstone project with two classmates, Ryan and Yash, in the final semester of Computer Programming
                    and Analysis using Java, Spring Framework, and a MySQL database backend. This application provides users access to a series
                    of local grocery stores in Durham Region and would allow them to place orders to be delivered to their homes."
                    secondDivClass="col-md-6"
                    image={process.env.PUBLIC_URL + "/images/gtg.jpg"}
                    GitHubPath="https://www.github.com/DanielHinbest/GroceriesToGo"
                    imageAltText="A photo of the Groceries To Go cart view"
                />

                <Project
                    firstDivClass="col-md-6 order-md-2"
                    featuretteHeader="Database Application: McLaughlin University"
                    description="McLaughlin University was developed in a Database Development class with in a group of four classmates, Ryan, Anna, and Yash, in our fifth semester
                    in Computer Programming and Analysis. We were given a list of business cases and selected McLaughlin University because we felt we had a good plan for building the application.
                    The application was developed using C#, WPF, and uses a SQL Server database. It was designed to allow the donation committee to add donations and view the overall funding
                    for each campus and program, as well as generate a series of reports for the user."
                    secondDivClass="col-md-6 order-md-1"
                    image={process.env.PUBLIC_URL + "/images/mclaughlin_uni.jpg"}
                    GitHubPath="https://www.github.com/DanielHinbest/McLaughlinUniversity"
                    imageAltText="A photo of the McLaughlin University home screen"
                />

                <Project
                    firstDivClass="col-md-6"
                    featuretteHeader="Web Development: Java Web Application"
                    description="This java application was a focus of the fourth semester Web Development course, where I would get my first experience in using
                    Java and JSP for web development. This project uses a PostgreSQL database connection and was designed to be run in Apache Tomcat 8.0. I learned
                    about how to build Java Servlets, JSP pages, and how to connect a Java application to a SQL database."
                    secondDivClass="col-md-6"
                    image={process.env.PUBLIC_URL + "/images/webd4201.jpg"}
                    GitHubPath="https://www.github.com/DanielHinbest/Java-Web-Development"
                    imageAltText="A photo of the registration page"
                />

                <hr className="featurette-divider" />
            </div>
        );
    }
}

export default ProjectList;