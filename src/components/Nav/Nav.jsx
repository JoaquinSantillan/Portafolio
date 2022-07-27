import { useEffect, useRef, useState } from 'react'
import '../../styles/nav.css'

export const NavBar = ()=>{

    const [sideBar,setSideBar] = useState(false)

    const handleClicker = ()=>{
        setSideBar(!sideBar)
    }

    return(
        <nav className="nav">
            <div className='principal-content-button'>
                <div className='content-button' onClick={handleClicker}>
                <span className='circle'></span>
                </div>
            </div>
            <ul className={sideBar ? 'nav-ul actives' : 'nav-ul'}>
                <a href="#home"><li className='homeHover'>HOME</li></a>
                <a href="#about"><li>ABOUT ME</li></a>
                <a href='#skills'><li>SKILLS</li></a>
                <a href='#proyects'><li>PROYECTS</li></a>
                <a href='#footer'><li>CONTACT</li></a>
            </ul>
        </nav>
    )
}