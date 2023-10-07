import React from 'react';
import logo from '../../Images/logo.png';
import downIcon from '../../Images/down-icon.png';

import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar">
                <img src={logo} alt="Logo" className="logo" />
                <div>
                    <button className="nav-btn lang-btn">English <img src={downIcon} alt='No Preview'/></button>
                    <button className="nav-btn">Sign In</button>
                </div>
            </nav>
            <div className="header-content">
                <h1>Unlimited movies, TV shows and more</h1>
                <h3>Watch anywhere. Cancel anytime.</h3>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <form className="email-signup">
                        <input type="email" placeholder="Email Address" required />
                    </form>
                    <button className="signup-btn" type="submit">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Header;