/**
 * AboutList.js
 * 
 * This file defines the AboutList component, which is a React class component
 * that renders multiple About components. Each About component displays information
 * about different aspects such as education, work experience, technology experience,
 * and accomplishments.
 * 
 * Author: Daniel Hinbest
 * Date: August 17, 2024
 */

import React from "react";
import About from "./About";  // Make sure this import path is correct

// Define the AboutList component as a class component
class AboutList extends React.Component {
    // Render method to display the component
    render() {
        return (
            <div className="row g-4">
                {/* About section for education */}
                <About 
                    sectionTitle="My Education" 
                    icon="fas fa-graduation-cap"
                    paragraph="
                    <p>Recently completed a <strong>Computer Science</strong> degree at <strong>Ontario Tech University</strong> through the Advanced Entry program, with 60 credit hours transferred from my previous diploma.</p>
                    
                    <p>Completed an undergraduate honours thesis project with Dr. Jeremy Bradbury and Dr. Michael Miljanovic in the <a href='https://seerlab.ca' target='_blank' rel='noopener noreferrer'>Software Engineering & Education Lab (SEER Lab)</a>, focusing on software testing education.</p>
                    
                    <p>Graduated with an <strong>Advanced Diploma in Computer Programming and Analysis</strong> from Durham College in June 2022, where I mastered desktop, console, and web application development, as well as SQL database design and implementation.</p>
                    
                    <p>Actively participated in First-Year Student Orientation and Open House events as a program representative, and served on the Program Advisory Committee to help shape the future of the program.</p>"
                />

                {/* About section for work experience */}
                <About 
                    sectionTitle="My Work Experience" 
                    icon="fas fa-briefcase"
                    paragraph="
                    <p>Previously employed as a <strong>Peer Tech Support</strong> at the Teaching and Learning Centre, Ontario Tech University (May 2024 - April 2025), supporting students with educational technologies including Canvas, Mentimeter, Kaltura, and Respondus Lockdown Browser.</p>
                    
                    <p>Worked as an <strong>IT Developer</strong> at Scotiabank (contracted through Dawn InfoTek) from August 2022 to August 2023, where I maintained technical infrastructure and enhanced system performance.</p>
                    
                    <p>Gained experience as an <strong>Artificial Intelligence (AI) Research Assistant</strong> at the AI Hub, Durham College (May - August 2021), researching chatbot technologies and building software applications for business clients.</p>
                    
                    <p>Served as a <strong>Peer Tutor</strong> at Durham College (September 2021 - April 2022), helping first and second-year students with C#, C++, Python, Java, and SQL courses.</p>"
                />

                {/* About section for technology experience */}
                <About 
                    sectionTitle="My Technology Skills" 
                    icon="fas fa-laptop-code"
                    paragraph="
                    <div class='row mb-3'>
                        <div class='col-12'>
                            <h5 class='fw-bold mb-2'>Programming Languages</h5>
                            <div class='d-flex flex-wrap gap-2 mb-3'>
                                <span class='badge bg-primary rounded-pill px-3 py-2'>Java</span>
                                <span class='badge bg-primary rounded-pill px-3 py-2'>C#</span>
                                <span class='badge bg-primary rounded-pill px-3 py-2'>Python</span>
                                <span class='badge bg-primary rounded-pill px-3 py-2'>C++</span>
                                <span class='badge bg-primary rounded-pill px-3 py-2'>JavaScript</span>
                                <span class='badge bg-primary rounded-pill px-3 py-2'>PHP</span>
                                <span class='badge bg-primary rounded-pill px-3 py-2'>Kotlin</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class='row mb-3'>
                        <div class='col-12'>
                            <h5 class='fw-bold mb-2'>Frameworks & Technologies</h5>
                            <div class='d-flex flex-wrap gap-2 mb-3'>
                                <span class='badge bg-secondary rounded-pill px-3 py-2'>Spring Framework</span>
                                <span class='badge bg-secondary rounded-pill px-3 py-2'>Django</span>
                                <span class='badge bg-secondary rounded-pill px-3 py-2'>React</span>
                                <span class='badge bg-secondary rounded-pill px-3 py-2'>ASP.NET</span>
                                <span class='badge bg-secondary rounded-pill px-3 py-2'>Pytest</span>
                                <span class='badge bg-secondary rounded-pill px-3 py-2'>JUnit</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class='row'>
                        <div class='col-12'>
                            <h5 class='fw-bold mb-2'>Database Systems</h5>
                            <div class='d-flex flex-wrap gap-2'>
                                <span class='badge bg-info rounded-pill px-3 py-2'>SQL Server</span>
                                <span class='badge bg-info rounded-pill px-3 py-2'>PostgreSQL</span>
                                <span class='badge bg-info rounded-pill px-3 py-2'>MySQL</span>
                            </div>
                        </div>
                    </div>"
                />

                {/* About section for accomplishments */}
                <About 
                    sectionTitle="My Accomplishments" 
                    icon="fas fa-trophy"
                    paragraph="
                    <p>Won the <strong>Gold Medal</strong> at the 2022 Skills Ontario Coding Competition, competing against students from post-secondary institutions across Ontario in problem-solving, general knowledge, flowcharting, and coding challenges.</p>
                    
                    <p>Graduated from Durham College with an <strong>Ontario College Advanced Diploma</strong> and achieved the <strong>President's Honour Roll</strong> status with a minimum Cumulative GPA of 4.0 out of 5 (equivalent to an 80% average).</p>
                    
                    <p>Received the <strong>Ontario Scholar</strong> award upon high school graduation in 2019, awarded to students with an average of 80% or higher in their best six Grade 12 courses.</p>"
                    button={<a className="btn btn-primary" href="2022_Results.pdf">View Skills Ontario Results <i className="fas fa-arrow-right ms-2"></i></a>}
                />
            </div>
        );
    }
}

// Export the AboutList component as the default export
export default AboutList;