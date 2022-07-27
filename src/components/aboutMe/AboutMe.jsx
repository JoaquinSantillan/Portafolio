import '../../styles/aboutme.css'
import uno from '../../images/uno.jpg'
import { useCallback, useEffect, useRef, useState } from 'react'
import { NavBar } from '../Nav/Nav'


export const AboutMe = ()=>{

        const ABOUT = useRef()
        const ABOUTDOS = useRef()

        const [y, setY] = useState(window.scrollY);
        const [yDos, setYDos] = useState(window.scrollY);

        const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget;
            if (y > window.scrollY) {
                ABOUT.current.style.transform= 'translateX(-600px)';
            } else if (y < window.scrollY) {
                ABOUT.current.style.transform= 'translateX(600px)';
            }
            setY(window.scrollY);
        }, [y]
        );
        
        useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);
        
        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
        }, [handleNavigation]);

        const handleNavigationDos = useCallback(
            e => {
                const window = e.currentTarget;
                if (yDos > window.scrollY) {
                    ABOUTDOS.current.style.transform= 'translateX(-600px)';
                } else if (yDos < window.scrollY) {
                    ABOUTDOS.current.style.transform= 'translateX(400px)';
                }
                setYDos(window.scrollY);
            }, [yDos]
            );
            
            useEffect(() => {
            setYDos(window.scrollY);
            window.addEventListener("scroll", handleNavigationDos);
            
            return () => {
                window.removeEventListener("scroll", handleNavigationDos);
            };
            }, [handleNavigationDos]);


    return(
        
        <div className="aboutme-container" id='about'>
            <span className='about-span' ref={ABOUT}>ABOUT ME</span>
            <div className="txt-container">
                <h1 className="title-container">ABOUT ME</h1>
                <p className="p-container">
                I am a front end developer, I work mainly with React and others, I trained in front end development in a self-taught way, but I learned the basics at university, I am currently taking courses to continue learning and growing, I was born in Argentina, Santa Fe I am 20 years old and I love technology
                </p>
            </div>

            <div className="image-container">
                <div className="images">
                    <img src={uno} alt='Joaquin Santillan'/>
                </div>
            </div>
            <span  className='about-span-dos' ref={ABOUTDOS}>ABOUT ME</span>
        </div>
    
    )
}