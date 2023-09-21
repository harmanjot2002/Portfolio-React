import "./EducationStyles.css";
import React from 'react';

const EducationSlider = () => {
  return (
    <div>
      <section className="education" id="education">
        <h2 className="heading">My <span>Education</span></h2>
        <div className="education-row">
            <div className="education-column">
                <div className="education-box">
                    <div className="education-content">
                        <div className="content">
                            <div className="year"><i className='bx bxs-calendar'></i>2018-2019</div>
                            <h3>Class 10-Baba Farid Public School,Faridkot</h3>
                            <p>School Topper Class-10 Examinations With A Percentage Of 97.2% (CBSE).</p>
                        </div>
                    </div>
                    <div className="education-content">
                        <div className="content">
                            <div className="year"><i className='bx bxs-calendar'></i>2020-2021</div>
                            <h3>Class 12-Guru Teg Bahadur Public School,Mehmuana</h3>
                            <p>School Topper Class-12 Examinations With A Percentage Of 95.8% (CBSE).</p>
                        </div>
                    </div>
                    <div className="education-content">
                        <div className="content">
                            <div className="year"><i className='bx bxs-calendar'></i>2021-2025</div>
                            <h3>BE,CSE-Chitkara University,Rajpura</h3>
                            <p>Last Semester CGPA : 9.83.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default EducationSlider
