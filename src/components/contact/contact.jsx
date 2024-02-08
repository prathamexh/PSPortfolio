import React from 'react'
import './contact.css'
import linkedin from '../../assets/linkedin.jpg'
import github from '../../assets/github.jpg'
import leetcode from '../../assets/leetcode.jpg'
import hackerrank from '../../assets/hackerrank.jpg'
import youtube from '../../assets/yt.jpg'

const contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Contact Me</h2>
        <span className="section__subtitle">My Socials</span>
        <div className="contact__container">
            <div className="contact__content grid">
                <div className="card__style">
                    <a href='https://www.linkedin.com/in/prathamesh-shukla-002919207/' target='_blank'>
                        <img src={linkedin} className="card__bttn">
                        </img>
                    </a>
                </div>
                {/* <div className="card__style">
                    <a href='https://www.linkedin.com/in/prathamesh-shukla-002919207/' target='_blank'>
                        <img src={github} className="card__bttn">
                        </img>
                    </a>
                </div> */}
                <div className="card__style">
                    <a href='https://leetcode.com/psshukla02/' target='_blank'>
                        <img src={leetcode} className="card__bttn">
                        </img>
                    </a>
                </div>
                <div className="card__style">
                    <a href='https://www.hackerrank.com/profile/psshukla02/' target='_blank'>
                        <img src={hackerrank} className="card__bttn">
                        </img>
                    </a>
                </div>
                <div className="card__style">
                    <a href='https://www.youtube.com/minetech/' target='_blank'>
                        <img src={youtube} className="card__bttn">
                        </img>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default contact