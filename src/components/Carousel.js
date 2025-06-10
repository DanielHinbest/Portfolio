/**
 * Carousel.js
 *
 * This file defines the Carousel component, which is a React functional component
 * that displays a carousel of child elements. The carousel automatically rotates
 * every 5 seconds and allows manual navigation through next and previous buttons.
 *
 * Props:
 * - children: The elements to be displayed in the carousel.
 *
 * Author: Daniel Hinbest
 * Date: August 17, 2024
 */

import React, { useEffect, useState, useCallback } from 'react';
import '../css/carousel.css';

const Carousel = (props) => {
    const { children } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length);
    }, [children]);

    // Function to go to the next slide
    const next = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % length);
        setTimeout(() => setIsTransitioning(false), 300);
    }, [length, isTransitioning]);

    // Function to go to the previous slide
    const prev = useCallback(() => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + length) % length);
        setTimeout(() => setIsTransitioning(false), 300);
    }, [length, isTransitioning]);

    // Function to go to specific slide
    const goToSlide = useCallback((index) => {
        if (isTransitioning || index === currentIndex) return;
        setIsTransitioning(true);
        setCurrentIndex(index);
        setTimeout(() => setIsTransitioning(false), 300);
    }, [currentIndex, isTransitioning]);

    // Automatic rotation every 5 seconds
    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            next();
        }, 5000);

        return () => clearInterval(interval);
    }, [next, isPlaying]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') prev();
            if (event.key === 'ArrowRight') next();
            if (event.key === ' ') {
                event.preventDefault();
                setIsPlaying(!isPlaying);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [next, prev, isPlaying]);

    return (
        <div className="carousel-container">
            {/* Image Counter */}
            <div className="carousel-counter">
                {currentIndex + 1} / {length}
            </div>

            {/* Play/Pause Button */}
            <button
                className="carousel-play-pause"
                onClick={() => setIsPlaying(!isPlaying)}
                title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
                {isPlaying ? '⏸' : '▶'}
            </button>

            <div className="carousel-wrapper">
                {/* Button to go to the previous slide */}
                <button onClick={prev} className="left-arrow" disabled={isTransitioning} title="Previous image">
                    ‹
                </button>

                <div className="carousel-content-wrapper">
                    <div
                        className="carousel-content"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                            transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
                        }}
                    >
                        {/* Render the children elements */}
                        {children}
                    </div>
                </div>

                {/* Button to go to the next slide */}
                <button onClick={next} className="right-arrow" disabled={isTransitioning} title="Next image">
                    ›
                </button>
            </div>

            {/* Indicators */}
            {length > 1 && (
                <div className="carousel-indicators">
                    {Array.from({ length }, (_, index) => (
                        <button
                            key={index}
                            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            title={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

// Export the Carousel component as the default export
export default Carousel;