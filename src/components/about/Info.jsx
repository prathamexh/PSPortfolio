import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-briefcase about__icon'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">20 Months</span>
        </div>
        <div className="about__box">
        <i class='bx bx-laptop about__icon'></i>
            <h3 className="about__title">Completed</h3>
            <span className="about__subtitle">10+ Projects</span>
        </div>
        <div className="about__box">
        <i class='bx bx-stats about__icon'></i>
            <h3 className="about__title">Solved</h3>
            <span className="about__subtitle">350+ DSA Questions</span>
        </div>
    </div>
    
  )
}

export default Info