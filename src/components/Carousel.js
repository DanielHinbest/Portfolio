/**
 * Carousel.js
 * 
 * This file defines the Carousel component, which is a React functional component
 * that displays a carousel of child elements. The carousel automatically rotates
 * every 20 seconds and allows manual navigation through next and previous buttons.
 * 
 * Props:
 * - children: The elements to be displayed in the carousel.
 * 
 * Author: Daniel Hinbest
 * Date: August 17, 2024
 */

import React, { useEffect, useState } from 'react';
import '../css/carousel.css';

const Carousel = (props) => {
    const { children } = props;
    const [currentIndex, setCurrentIndex] = useState(0); // State to track the current index of the carousel
    const [length, setLength] = useState(children.length); // State to track the number of children

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length);
    }, [children]);

    // Automatic rotation every 20 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            next();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, length]);

    // Function to go to the next slide
    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
    };

    // Function to go to the previous slide
    const prev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + length) % length);
    };

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {/* Button to go to the previous slide */}
                <button onClick={prev} className="left-arrow">
                    &lt;
                </button>
                <div className="carousel-content-wrapper">
                    <div
                        className="carousel-content"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {/* Render the children elements */}
                        {children}
                    </div>
                </div>
                {/* Button to go to the next slide */}
                <button onClick={next} className="right-arrow">
                    &gt;
                </button>
            </div>
        </div>
    );
};

// Export the Carousel component as the default export
export default Carousel;