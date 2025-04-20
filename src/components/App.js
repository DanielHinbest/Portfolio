/**
 * App.js
 * 
 * This file defines the main App component, which serves as the root component
 * of the application. It imports and renders the Header, Main, and Footer components
 * to structure the layout of the application.
 * 
 * Author: Daniel Hinbest
 * Date: August 17, 2024
 */

import '../css/App.css';
import '../css/custom.css'; // Import the new custom CSS
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import { useEffect } from 'react';

// Define the App component as a functional component
function App() {
  // Add effect to load Font Awesome script
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.min.js';
    script.crossOrigin = 'anonymous';
    script.defer = true;
    
    // Append the script to the document
    document.head.appendChild(script);
    
    // Clean up function to remove the script when component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className='App'>
      {/* Render the Header component */}
      <Header/>
      {/* Render the Main component */}
      <Main/>
      {/* Render the Footer component */}
      <Footer/>
    </div>
  );
}

// Export the App component as the default export
export default App;