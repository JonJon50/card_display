import React from 'react';
import './Footer.css'; // optional if you want custom styles

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} John Hagens. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
