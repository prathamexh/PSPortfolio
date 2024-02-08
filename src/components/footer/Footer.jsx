import React from 'react';
import "./footer.css";
import { FiGithub, FiLinkedin, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            
            <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link"><i class='bx bx-up-arrow-alt icon__size' ></i></a>
                    </li>
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
               
            </ul>
            <div className="footer__social">
                <a href="https://www.youtube.com/minetech" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiYoutube />
                </a>
                <a href="https://github.com/prathamexh" className="home__social-icon" target="_blank" rel="noreferrer">
                    <FiGithub />
                </a>    
                <a href="https://www.linkedin.com/in/prathamesh-shukla-002919207/" className="home__social-icon" target="_blank" rel="noreferrer" >
                    <FiLinkedin />
                </a>    
            </div>
            <div className="built"><i class='bx bxl-react'></i> </div>
            {/* <span className="footer__copy"></span> */}
        </div>
    </footer>
  );
}

export default Footer;