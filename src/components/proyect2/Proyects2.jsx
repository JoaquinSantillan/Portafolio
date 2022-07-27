import React from 'react'
import { useState,useEffect,useRef } from 'react'
import '../../styles/proyects2.css'
import {motion} from 'framer-motion'
import images from'./images'

function AboutMe(){

    const[width,setWidth]= useState(0)
    const carousel = useRef()

    useEffect(()=>{
        console.log(carousel.current.scrollWidth,carousel.current.offsetWidth)
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    },[])



    return(
    <section className='aboutme' id='proyects'>
        <div className='proyect-txt-titles'>
        <h1>PROYECTS</h1>
        <p>These are some of the projects I have done, inside my github you will find many more :)</p>
        </div>
        <motion.div className="container-about-me" ref={carousel}>
            <motion.div className="img-container"
            drag="x"
            dragConstraints={{ right:0,left:-width }}
            >
            {
            images.map( image =>{
                return(
                    <motion.div className='item' key={image}>
                        <h1 className='item-title'>{image.title}</h1>
                        <span className='number-proyect'>//{image.id}</span>
                        <div className='container-hover-image'>
                        <a href={image.linkes}>GO TO REPO</a>
                        </div>
                        <img className='img-about' src={image.image} alt=""/>
                    </motion.div>
                )
            })}
            </motion.div>
        </motion.div>
    </section>
    )
}


export default AboutMe