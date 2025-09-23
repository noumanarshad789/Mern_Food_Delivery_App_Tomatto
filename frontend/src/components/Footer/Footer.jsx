import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="Logo" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos consequatur enim obcaecati facilis assumenda error quae veniam et explicabo ipsum quo esse ipsam fuga, eveniet at quod itaque dolore libero.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="facebook icon" />
                        <img src={assets.twitter_icon} alt="facebook icon" />
                        <img src={assets.linkedin_icon} alt="facebook icon" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-234-567-890</li>
                        <li>constact@tomato.com</li>
                    </ul>
                </div>
            </div>

            <hr />
            <p className='footer-copyright'>Copyright 2024 &copy; Tomato.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer
