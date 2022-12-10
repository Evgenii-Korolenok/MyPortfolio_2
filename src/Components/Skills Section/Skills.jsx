import React from "react";
import './skills.css';
import { TbBrandReactNative } from 'react-icons/tb';
import { IoLogoJavascript } from 'react-icons/io';
import { IoLogoSass } from 'react-icons/io';
import { SiCss3 } from 'react-icons/si';
import { FaHtml5 } from 'react-icons/fa';
import { TbBrandGithub } from 'react-icons/tb';
import { CgFigma } from 'react-icons/cg';
import { SiAdobephotoshop } from 'react-icons/si';
import { FaGitSquare } from 'react-icons/fa';

const Skills = () => {
    return (
        <section id='skills' className='skills container section'>
            <div className="sectionTitle">
                <span className="titleNumber">
                    02 .
                </span>
                <h5 className="titleText">Skills
                    <div className="underline">
                        <span></span>
                    </div>
                </h5>
            </div>

            <div className="skillsContainer grid">
                <div className="skillGroup">
                    <div className="groupTitle">
                        <h2 className="title">Web Development</h2>
                        <span className="subTitle">
                            Only Half a Year Experience 
                        </span>
                    </div>

                    <div className="generalSkills">
                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <TbBrandReactNative className='icon'/>
                            </div>
                            <span className="skillName">
                                ReactJS
                            </span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <IoLogoJavascript className='icon'/>
                            </div>
                            <span className="skillName">
                                JavaScript
                            </span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <IoLogoSass className='icon'/>
                            </div>
                            <span className="skillName">
                                Sass
                            </span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <SiCss3 className='icon'/>
                            </div>
                            <span className="skillName">
                                Css3
                            </span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <FaHtml5 className='icon'/>
                            </div>
                            <span className="skillName">
                                Html5
                            </span>
                        </div>

                    </div>
                </div>

                <div className="skillGroup">
                    <div className="groupTitle">
                        <h2 className="title">UI/UX Design</h2>
                        <span className="subTitle">
                            Only Half a Year Experience 
                        </span>
                    </div>

                    <div className="generalSkills">
                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <CgFigma className='icon'/>
                            </div>
                            <span className="skillName">
                                Figma
                            </span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <SiAdobephotoshop className='icon'/>
                            </div>
                            <span className="skillName">
                                Photoshop
                            </span>
                        </div>

                    </div>
                </div>

                <div className="skillGroup">
                    <div className="groupTitle">
                        <h2 className="title">Other Skills</h2>
                        <span className="subTitle">
                            Only Half a Year Experience 
                        </span>
                    </div>

                    <div className="generalSkills">
                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <TbBrandGithub className='icon'/>
                            </div>
                            <span className="skillName">
                                Git/GitHub
                            </span>
                        </div>

                        <div className="singleSkill">
                            <div className="iconBox flex">
                                <FaGitSquare className='icon'/>
                            </div>
                            <span className="skillName">
                                Git
                            </span>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Skills;