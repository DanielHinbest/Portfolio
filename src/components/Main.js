/**
 * Main.js
 * 
 * This file defines the Main component, which is a React class component
 * that serves as the main content area of the application. It includes a
 * carousel of images, an AboutList component, and a ProjectList component.
 * 
 * Author: Daniel Hinbest
 * Date: August 17, 2024
 */

import React from "react";
import Carousel from "./Carousel";
import AboutList from './AboutList';
import ProjectList from './ProjectList';

// Define the Main component as a class component
class Main extends React.Component {
    // Render method to display the component
    render() {
        return (
            <main>
                <div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 64, maxWidth: 800 }}>
                    {/* Carousel component with images */}
                    <Carousel>
                        <div>
                            <a href="#"><img src={process.env.PUBLIC_URL + "/images/daniel.jpg"} alt="Daniel Hinbest" /></a>
                        </div>
                        <div>
                            <a href="#"><img src={process.env.PUBLIC_URL + "/images/skills.jpg"} alt="Skills Ontario Medal & Certificate" /></a>
                        </div>
                        <div>
                            <a href="#"><img src={process.env.PUBLIC_URL + "/images/diploma.jpg"} alt="Durham College Advanced Diploma" /></a>
                        </div>
                    </Carousel>
                </div>
                <div className="container marketing" style={{ marginTop: 32 }}>
                    {/* AboutList component */}
                    <AboutList />

                    {/* ProjectList component */}
                    <ProjectList />

                </div>
            </main>
        );
    }
}

// Export the Main component as the default export
export default Main;