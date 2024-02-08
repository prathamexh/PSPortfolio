// import React from 'react';
// import './header.css';

// const Header = () => {
//   return (
//     <header className="header">
//         <nav className="nav container">
//             <a href="index.html" className="nav__logo"> Prathamesh Shukla</a>
//             <div className="nav__menu">
//                 <ul className="nav__list grid">
//                     <li className="nav__item">
//                         <a href="#home" className="nav__link active-link">
//                             <i className="uil uil-estate nav__icon">

//                             </i>Home
//                         </a>
//                     </li>
//                     <li className="nav__item">
//                         <a href="#about" className="nav__link">
//                             <i className="uil uil-user nav__icon">
                                
//                             </i>About
//                         </a>
//                     </li>
//                     <li className="nav__item">
//                         <a href="#skills" className="nav__link">
//                             <i className="uil uil-file-alt nav__icon">
                                
//                             </i>Skills
//                         </a>
//                     </li>
//                     <li className="nav__item">
//                         <a href="#portfolio" className="nav__link">
//                             <i className="uil uil-scenery nav__icon">
                                
//                             </i>Portfolio
//                         </a>
//                     </li>
//                     <li className="nav__item">
//                         <a href="#connect" className="nav__link">
//                             <i className="uil uil-user-plus nav__icon">
                                
//                             </i>Connect
//                         </a>
//                     </li>


//                 </ul>
//                 <i className="uil uil-times nav__close"></i>
//             </div>
//             <div className="nav__toggle">
//                 <i className="uil uil-apps"></i>
//             </div>
//         </nav>
//     </header>
//   )
// }

// export default Header

import React, {useState} from "react";
import './header.css';
import { HiOutlineHome, HiOutlineUser, HiOutlineBadgeCheck, HiOutlineClipboardList, HiOutlinePhotograph, HiOutlineMail, HiX, HiOutlineMenu } from "react-icons/hi";


const Header = () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if(this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });
   
    const[Toggle, showMenu] = useState(false);
    const[activeNav, setActiveNav] = useState("#home");

    return(
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Portfolio</a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav("#home")} 
                            className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineHome className="nav__icon"/>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav("#about")} 
                            className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineUser className="nav__icon"/>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav("#skills")} 
                            className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineBadgeCheck className="nav__icon"/>Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#qualifications" onClick={() => setActiveNav("#qualifications")} 
                            className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineClipboardList className="nav__icon"/>Qualifications
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} 
                            className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlinePhotograph className="nav__icon"/>Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav("#connect")} 
                            className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineMail className="nav__icon"/>Contact
                            </a>
                        </li>
                    </ul>
                    <HiX className="nav__close" onClick={() => showMenu(!Toggle)} />
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <HiOutlineMenu />
                </div>
            </nav>
        </header>
    )
}

export default Header