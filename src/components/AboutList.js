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
import About from "./About";

// Define the AboutList component as a class component
class AboutList extends React.Component {
    // Render method to display the component
    render() {
        return (
            <div className="row">
                {/* About section for education */}
                <About 
                    sectionTitle="My Education" 
                    imagePath={process.env.PUBLIC_URL + "/images/education.jpg"} 
                    paragraph="
                    In 2023, I started studying at Computer Science at Ontario Tech University as part of the college-to-university Advanced Entry program. 
                    As part of this, I received 60 credit hours directly from the transfer. In this program, I have further enhanced my knowledge by taking classes that focus on software quality and testing, mobile development, data science, among others.
                    Now in my final year, I also am eligible to participate in an undergraduate thesis project. As part of this, I am working with Dr. Jeremy Bradbury and Dr. Michael Miljanovic in the Software Engineering & Education Lab (SEER Lab) with a 
                    topic focusing on educating students on software testing.
                    <br/><br/>
                    I graduated from Computer Programming and Analysis at Durham College in June 2022. 
                    During this time, I learned about developing desktop, console, and web applications. I have built learned how to design and implement a SQL database, as well as analyze and solve business problems.
                    I have received practice by bring provided a case for a business problem and how to plan and implement technology to address it. 
                    <br/><br/>
                    While attending Durham College, I've also had the opportunity to get involved
                    by participating in activities including the First-Year Student Orientation and Open House as a program student representative and would speak with incoming students to discuss the program's studies
                    and answer questions about the scope and opportunities. I've also served as a student representative on the Program Advisory Committee, which is a board that meets
                    throughout the year and works to help shape the future of the program with input from students, alumni, faculty, and industry leaders."
                />

                {/* About section for work experience */}
                <About 
                    sectionTitle="My Work Experience" 
                    imagePath={process.env.PUBLIC_URL + "/images/work.png"} 
                    paragraph="
                    Since May 2024, I have been working at the Teching and Learning Centre at Ontario Tech University as Peer Tech Support. In this role, I work with the Educational Technology Analyst to help support students with their use of
                    the educational technologies that are used at Ontario Tech. This includes but is not limited to Canvas, Mentimeter, Kaltura, and Respondus Lockdown Browser.
                    <br/><br/>
                    From August 2022 to August 2023, I worked at Scotiabank (contracted through Dawn InfoTek) as an IT Developer, where I helped maintain the technical infrastructure alongside a team of developers. During this time, I focused on enhancing system performance and implementing solutions to streamline operations. 
                    My role involved collaborating closely with team members to address technical challenges and optimize processes.
                    <br/><br/>
                    From May to August 2021, I worked in my first position in the IT Industry as an Artificial Intelligence (AI) Research Assistant at the AI Hub at Durham College under the co-op education program. This allowed me to work with AI systems and research how it can be used in our lives.
                    I would spend time researching and test technologies that can be used to provide chatbots for companies, and would build software applications for business clients of the AI Hub.               
                    <br/><br/>
                    From September 2021 to April 2022, I worked part-time as a Peer Tutor at Durham College. During this time, I would meet with students in first and second year, who needed assistance in their courses and would help them gain a further understanding on the concepts in the courses.
                    In this program, I tutored courses that would focus on C#, C++, Python, Java, and SQL from an introductory to intermediate level."
                />

                {/* About section for technology experience */}
                <About 
                    sectionTitle="My Technology Experience" 
                    imagePath={process.env.PUBLIC_URL + "/images/coding.png"} 
                    paragraph="
                    I have experience building and maintaining applications for web, desktop, and mobile environments using many languages and technologies.
                    My most proficient language is Java, which I was first introduced to in 2017 while attending high school and have experience building both desktop and web applications in the language. 
                    <br/><br/>
                    In post-secondary education, I have also gained experience in C#, Python, C++, PHP, and JavaScript and have used technologies including Spring Framework (Java), Django (Python), Windows Forms, WPF, and ASP.NET (C#), and React (JavaScript). 
                    I am experienced in the use of software testing tools including JUnit and PyTest for white box testing in addition to creating test cases based on requirements and user stories for black box testing.
                    I have knowledge of using SQL databases in SQL Server, PostgreSQL, and MySQL as a database for both web and desktop environments."
                />

                {/* About section for accomplishments */}
                <About 
                    sectionTitle="My Accomplishments" 
                    imagePath={process.env.PUBLIC_URL + "/images/trophy.jpg"} 
                    paragraph="
                    In the spring of 2022, I represented Durham College at the 2022 Skills Ontario Coding Competition, where I was competing against students from post-secondary institutions across Ontario and was required to complete tasks related to problem solving, general knowledge, flowcharts, 
                    and my coding abilities. At the Skills Ontario Closing Ceremony, I was announced as the <a href='https://www.durhamradionews.com/archives/154355'>Gold Medalist in the Post-Secondary Coding Competition.</a>
                    <br/><br/>               
                    While studying at Durham College, I graduated in June 2022 with an Ontario College Advanced Diploma and was on the President's Honour Roll. This is achieved by a minimum Cumulative GPA of 4.0 out of 5 (equivalent to an 80% average) in the program.
                    <br/><br/>
                    I graduated high school in 2019, and was awarded the Ontario Secondary School Diploma along with other awards
                    including the Ontario Scholar, which is awarded to students with an average of 80% or higher in their best six Grade 12 courses."
                    button={<p><a class='btn btn-secondary' href='2022_Results.pdf'>View Skills Ontario Results &raquo;</a></p>}
                />
            </div>
        );
    }
}

// Export the AboutList component as the default export
export default AboutList;