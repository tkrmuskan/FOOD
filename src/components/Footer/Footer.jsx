import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id="footer">
            <div className='footer-content'>
                <div className='footer-content-left'>
                    <img src={assets.logo} alt='' />
                    <p>"Explore a world of flavors with us."Indulge in our delicious menu crafted with passion and quality ingredients. Join our community of food enthusiasts today and discover a culinary journey like no other."</p>
                    <div className='footer-social-icons'>
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className='footer-content-center'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='footer-content-right'>
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-345-111</li>
                        <li>fooddelivery@rapidmunch.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>Copyright 2024 © Rapid Munch.com - All Right Reserved. </p>
        </div>
    )
}

export default Footer
