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
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

// Define the App component as a functional component
function App() {
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