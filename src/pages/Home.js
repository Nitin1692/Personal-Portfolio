import React from 'react'
import { LinkedinFilled, GithubFilled } from '@ant-design/icons'
import '../styles/home.css'


function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Nitin</h2>
        <div className="prompt">
          <p>To make use of my interpersonal skills to achieve goals of a company that focuses on customer satisfaction and customer experience.</p>
          <LinkedinFilled />
          <GithubFilled />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, BootStrap
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
