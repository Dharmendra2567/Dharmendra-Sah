import React, { useEffect, useRef } from 'react';
import Navbar from '../components/layout/Navbar';
import Quote from './Quote';
import { observeIntersection } from '../utility/userInterfaceObserver';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import { Footer } from '../components/Footer';
import SkillSection from '../components/SkillSection';
import MoveToTop from '../components/MoveToTop';

const HomePage = () => {
    
    const introImageRef = useRef(null)
    const introTextRef = useRef(null);
    const headerRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);


    useEffect(() => {
        // const image = document.querySelector('.intro-image');
        // const text = document.querySelector('.intro-text');

        // Add the show class to trigger the animation on page load for the intro section
        // image.classList.add('show');
        // text.classList.add('show');

        observeIntersection([introImageRef,introTextRef,headerRef, textRef, buttonRef]);
    }, []);

    return (
        <>
            <div className='container-fluid'>
                <Navbar />
                <div className='row '>
                    <div className='intro  '>
                        <div className='flex-item w-100'>
                            <img src="./images/my_pic.png" alt='' className='intro-image' ref={introImageRef}/>
                        </div>
                        <div className='d-flex flex-column flex item w-100 h-100 p-lg-5 '>
                            <div className='intro-text  text-center' ref={introTextRef}>
                                <h1 className='header-text'>Dharmendra Sah</h1>
                                <p className='text-dark font-oswald fs-5 fw-bolder animated-text'>Software Engineer | Full Stack Developer</p>
                            </div>
                            <div className=' flex-item qot px-3'>
                                <Quote />
                            </div>
                        </div>

                    </div>
                </div>
                <div className='row'>
                    <div className='about d-flex flex-column align-items-center justify-content-center'>
                        <h1 className='p-4 about-me-header header-text' ref={headerRef}>About Me</h1>
                        <p className='about-me-text about-text para-text text-lg-center' ref={textRef}>Hello, I’m a MERN Stack Developer with
                            2 years of real-world experience. My focus is on building dynamic, responsive web applications and crafting efficient
                            backend systems. I specialize in transforming user requirements into seamless, feature-rich applications, leveraging
                            cutting-edge tools and frameworks like MongoDB, Express, React, and Node.js. Currently, I’m based in India, but
                            I’m originally from Nepal. My journey began with a startup, where I honed my skills over the first year. Later, I worked
                            on larger projects that refined my expertise in scalable application development and API integration.
                            I’m passionate about solving complex challenges through innovative, user-centric software solutions.</p>
                        <button className='px-4 m-3 about-button' ref={buttonRef}>Know More</button>
                    </div>
                </div>
                <SkillSection/>
                <ProjectSection />
                <ContactSection />
                <MoveToTop/>
                <Footer />
               
            </div>
        </>
    );
};

export default HomePage;
