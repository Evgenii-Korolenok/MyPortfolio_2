import React from "react";
import './projects.css';
import { AiFillYoutube } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';
import img1 from '../../Assets/first_proj.png';
import img2 from '../../Assets/bycicle.png';
import img3 from '../../Assets/lighthouse.png';
import img4 from '../../Assets/myportfolio.png';


const data = [
    {
        id: 4,
        image: img4,
        livelink: 'https://evgenii-korolenok.github.io/MyPortfolio_2/',
        demo: '',
        github: 'https://github.com/Evgenii-Korolenok/MyPortfolio_2',
        title: 'My Portfolio_2',
        desc: 'This is my first React App developed by myself as an exam paper for a frontend developer course.',
        tech1: 'Html',
        tech2: 'CSS',
        tech3: 'Javascript',
        tech4: 'ReactJS',
    },
    {
        id: 1,
        image: img1,
        livelink: 'https://evgenii-korolenok.github.io/Homework_10_CSS_HTML/',
        demo: '',
        github: 'https://github.com/Evgenii-Korolenok/Homework_10_CSS_HTML',
        title: 'Homework 10',
        desc: 'This artwork was created with CSS and HTML from a Figma template.',
        tech1: 'Html',
        tech2: 'CSS',
    },

    {
        id: 2,
        image: img2,
        livelink: 'https://evgenii-korolenok.github.io/Exam_CSS_HTML/',
        demo: '',
        github: 'https://github.com/Evgenii-Korolenok/Exam_CSS_HTML',
        title: 'Exam HTML/CSS',
        desc: 'This artwork was created with CSS and HTML from a Figma template.',
        tech1: 'Html',
        tech2: 'CSS',
    },
    {
        id: 3,
        image: img3,
        livelink: 'https://evgenii-korolenok.github.io/Interesting_Practice_Lighthouse/',
        demo: '',
        github: 'https://github.com/Evgenii-Korolenok/Interesting_Practice_Lighthouse',
        title: 'Lighthouse',
        desc: 'Created based on code taken from the web.  Every line is carefully studied when writing.',
        tech1: 'Html',
        tech2: 'CSS',
    },
]

const Projects = () => {
    return (
        <section id='projects' className="projects container section">
            <div className="sectionTitle">
                <span className="titleNumber">
                    03 .
                </span>
                <h5 className="titleText">Projects
                    <div className="underline">
                        <span></span>
                    </div>
                </h5>
            </div>

            <div className="projectContainer grid">
                {
                    data.map(({id, github, image, livelink, desc, demo, title, tech1, tech2, tech3, tech4}) => {
                        return(
                            <div key={id} className="singleProject">
                                
                                <div className="externalLinks flex">
                                    {/* <div className="youtubeIcon">
                                        <a href={demo} target="_blank">
                                            <AiFillYoutube className='icon'/>
                                        </a>
                                    </div> */}
                                    <div className="githubIcon">
                                        <a href={github} target="_blank">
                                            <FiGithub className='icon'/>
                                        </a>
                                    </div>
                                </div>

                                <div className="imgDiv">
                                    <a href={livelink} target="_blank">
                                        <img src={image} alt={title} />
                                    </a>
                                </div>

                                <div className="projectTitle">
                                    <h3>{title}</h3>
                                </div>

                                <div className="desc">
                                    {desc}
                                </div>

                                <div className="technologies flex">
                                    <small>{tech1}</small>
                                    <small>{tech2}</small>
                                    <small>{tech3}</small>
                                    <small>{tech4}</small>
                                </div>

                            </div>
                        )
                    })

                }
            </div>

        </section>
    )
}

export default Projects;