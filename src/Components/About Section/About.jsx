import React from "react";
import './about.css';
import { TbCloudDownload } from 'react-icons/tb';
import img from '../../Assets/programmer2.jpg';

const About = () => {
    return (
        <section id='about' className='about section container'>

            <div className="sectionTitle">
                <span className="titleNumber">
                    01 .
                </span>
                <h5 className="titleText">About Me
                    <div className="underline">
                        <span></span>
                    </div>
                </h5>
            </div>

            <div className="sectionContent grid">
                <div className="textSection">
                    <h4>
                        I am a successful and driven web developer, although I have little experience using HTML, Sass, and Javascript to create accessible web pages and component-based systems. 
                        <br/>
                        Ability to deliver quality results when working collaboratively in a rapidly changing work environment and team composition.
                        <br/>
                        I am a passionate person willing to learn more technologies to become a better developer than I was yesterday.
                    </h4>

                    <div className="aboutBtn">
                        <a href="cv template star.docx" download="cv template star.docx" className="flex">
                            Download CV <TbCloudDownload className='icon'/>
                        </a>
                    </div>
                </div>

                <div className="aboutImgDiv">
                    <img src={img} alt="E Korolyonok" className="aboutImg" />
                </div>

            </div>

        </section>
    )
}

export default About;