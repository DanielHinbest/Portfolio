/**
 * ContactForm.js
 * 
 * This file defines the ContactForm component, which is a React class component
 * that embeds a Google Form within an iframe to allow visitors to contact the site owner.
 * 
 * Author: Daniel Hinbest
 * Date: May 20, 2025
 */

import React from "react";

// Define the ContactForm component as a class component
class ContactForm extends React.Component {
    // Render method to display the component
    render() {
        // Replace this URL with your actual Google Form embed URL
        const googleFormUrl = "https://forms.gle/6oqXLvzWu8Mtapyi9?embedded=true";
        
        return (
            <div className="contact-form-container">
                <div className="ratio ratio-1x1" style={{ maxHeight: "800px" }}>
                    <iframe 
                        src={googleFormUrl}
                        title="Contact Form" 
                        width="100%" 
                        height="100%" 
                        frameBorder="0" 
                        marginHeight="0" 
                        marginWidth="0"
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        );
    }
}

// Export the ContactForm component as the default export
export default ContactForm;