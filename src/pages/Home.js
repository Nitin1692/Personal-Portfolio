import React from 'react'
import { LinkedinFilled, GithubFilled } from '@ant-design/icons'
import '../styles/home.css'
import Nitin from '../assets/Nitin Jain.jpg'


function Home() {
  function linkedinClick(e) {
    e.preventDefault();
    window.location.href = "https://www.linkedin.com/in/nitinbca/";
  }
  function githubClick(e){
    e.preventDefault();
    window.location.href = "https://github.com/Nitin1692";
  }
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Nitin</h2>
        <div className="prompt">
          <p>To make use of my interpersonal skills to achieve goals of a company that focuses on customer satisfaction and customer experience.</p>
          <LinkedinFilled onClick={linkedinClick} />
          <GithubFilled onClick={githubClick} />
        </div>
      </div>
      <img src={Nitin} alt="" srcset="" className="image" />
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, BootStrap
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, Spring Boot, ExpressJS, MySQL, 
              MongoDB, SQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home;
