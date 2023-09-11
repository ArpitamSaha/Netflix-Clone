import React from 'react';
import downIcon from '../../Images/down-icon.png';
import './Footer.css';

const Footer = () => {
    return (
        <div class="footer">
            <h2>Questions? Call 000-800-919-1694</h2>
            <div class="row">
                <div class="col">
                    <a href="#">FAQ</a>
                    <a href="#">Media Center</a>
                    <a href="#">Ways to Watch</a>
                    <a href="#">Cookies Preferences</a>
                    <a href="#">Speed Test</a>
                </div>

                <div class="col">
                    <a href="#">Help Center</a>
                    <a href="#">Investor Relation</a>
                    <a href="#">Terms of Use</a>
                    <a href="#">Corporate Information</a>
                    <a href="#">Legal Notices</a>
                </div>

                <div class="col">
                    <a href="#">Account</a>
                    <a href="#">Jobs</a>
                    <a href="#">Privacy</a>
                    <a href="#">Contact Us</a>
                    <a href="#">Only on Netflix</a>
                </div>
                <button class="nav-btn lang-btn">English <img src={downIcon} /></button>


            </div>
            <p class="copyright-txt">Netflix India</p>
        </div>
    );
};

export default Footer;