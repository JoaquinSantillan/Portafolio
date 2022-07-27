import React from 'react'
import '../../styles/skills.css'

import img1 from '../../svg/1.png'
import img2 from '../../svg/2.svg'
import img3 from '../../svg/3.svg'
import img4 from '../../svg/4.svg'
import img5 from '../../svg/5.svg'
import img6 from '../../svg/6.svg'
import img7 from '../../svg/7.svg'
import img9 from '../../svg/9.svg'
import img10 from '../../svg/10.svg'


function MySkills(){
    
    return(
        <div className='content' id='skills'>
            <div className='txtcon'>
                <div className='txtcon-content'>
                <h1>MY SKILLS</h1>
                <p>these are the skills that I learned during 12 months, I know it seems like a short time but every day I try to perfect my skills more and more</p>
                </div>
            </div>

            <div className='img-container-skills'>
                <img className='img-skill' src={img3}/>
                <img className='img-skill' src={img2}/>
                <img className='img-skill' src={img1}/>
                <img className='img-skill' src={img6}/>
                <img className='img-skill' src={img4}/>
                <img className='img-skill' src={img5}/>
                <img className='img-skill' src={img7}/>
                <img className='img-skill' src={img9}/>
                <img className='img-skill' src={img10}/>
            </div>

        </div>
    )
}


export default MySkills