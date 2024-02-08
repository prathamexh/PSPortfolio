import React from 'react'
import './skills.css'

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Backend</h3>
        <div className="skills__box">
            <div className="skills__group grid">
                <div className="skills__data">
                <i class='bx bx-badge-check' ></i>
                <div>
                    <h3 className="skills__name">
                        Java
                    </h3>
                </div>
                </div>
                <div className="skills__data">
                <i class='bx bx-badge-check' ></i>
                <div>
                    <h3 className="skills__name">
                        C#
                    </h3>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check' ></i>
                <div>
                    <h3 className="skills__name">
                        Python
                    </h3>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check' ></i>
                <div>
                    <h3 className="skills__name">
                        Django
                    </h3>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check' ></i>
                <div>
                    <h3 className="skills__name">
                        FastAPI
                    </h3>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check' ></i>
                <div>
                    <h3 className="skills__name">
                        Spring boot
                    </h3>
                </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Backend