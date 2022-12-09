import React from "react"
import InstagramLogo from "../img/instagram.png"

export default function Footer() {
    return (
    <footer>
        <div className="column">
            <div className="row" id="logo">RIBU LOGO</div>
            <div className="row">
                <p>support@ribu.io</p>
                <p>Telefon</p>
                <p>Telegram</p>
            </div>
            <div className="row">
                <p>Contact Options</p>
                <p>Privacy Policy</p>
                <p>Cookies</p>
            </div>
            
            <div className="logos" id="social_media_icons">
                <img src={InstagramLogo} alt="instagram logo"></img>
                <img src={InstagramLogo} alt="instagram logo"></img>
                <img src={InstagramLogo} alt="instagram logo"></img>
                <img src={InstagramLogo} alt="instagram logo"></img>
                <img src={InstagramLogo} alt="instagram logo"></img>
            </div>
        </div>
        <div className="column">
            <div className="title">
                About Us
            </div>
            <div className="links">
                <a href="#">Pricing</a>
                <a href="#">Pro Package Objectives</a>
                <a href="#">Why Ribu?</a>
                <a href="#">Testimonials</a>
                <a href="#">FAQ</a>
                <a href="#">Partners</a>
                <a href="#">Affiliate Programs</a>
                <a href="#">Terms & Conditions</a>
            </div>
        </div>
        <div className="column">
        <div className="title">
                Trading
            </div>
            <div className="links">
                <a href="#">User Dashboard</a>
                <a href="#">Leaderboard</a>
                <a href="#">Trading Blogs</a>
            </div>
        </div>
    </footer>
    )
    
}