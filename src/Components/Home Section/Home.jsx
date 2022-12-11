import React from "react";
import './home.css';
import { AiFillGithub } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { TbArrowBigRightLines } from 'react-icons/tb';
import { TbChevronsDown } from 'react-icons/tb';
import img from '../../Assets/home-img.svg';

const Home = () => {
    return (
        <section id='home' className='home section'>

            {/* Будет виден только на широком экране */}
            <div className="leftIcons">
                <div className="socials grid">
                    <a href="" target='_blank'>
                        <AiFillGithub className='icon'/>
                    </a>
                    <a href="" target='_blank'>
                        <BsFacebook className='icon'/>
                    </a>
                    <a href="" target='_blank'>
                        <AiFillLinkedin className='icon'/>
                    </a>
                    <div className="line"></div>
                </div>
            </div>

            <div className="container homeContainer">
                <div className="textDiv">
                    <span className="introText">
                        Hi my name is,
                    </span>

                    <h1 className='title'>
                        Evgenii Korolyonok
                    </h1>

                    <span className='subTitle'>
                        I develope scalable web based application and software.
                    </span>

                    <p className="homeParagraph">
                        I code within required coding standarts and styles to serve the exact need.
                    </p>

                    <div className="lowerHomeSection">
                        <button className="contactBtn">
                            <a href="#contact" className="flex">
                                Contact Me <TbArrowBigRightLines className='icon'/>
                            </a>
                        </button>

                        <div className="scrollDiv">
                            <a href="#about" className="flex"><h6 className="scroll">Scroll Down</h6> <TbChevronsDown className='icon'/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="homeImgDiv">
                    <img src={img} alt="" className="homeImg"/>
                </div>.
            </div>
            {/* Виден только на широком экране постоянно */}
            <div className="rightEmail">
                <div>
                    <div className="emailAdress">
                        <a href="https://mailto:kor-evgenii@mail.ru" target='_blank'>
                            kor-evgenii@mail.ru
                        </a>
                    </div>

                    <div className="line"></div>
                </div>
            </div>

        </section>
    )
}

export default Home;