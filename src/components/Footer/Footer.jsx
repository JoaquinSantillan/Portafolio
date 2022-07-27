import '../../styles/Footer.css'

import one from '../../svg/lineOne.svg'
import two from '../../svg/lineDos.svg'
import treh from '../../svg/lineTres.svg'

export const Footer = ()=>{
    return(
        <footer className="footer" id='footer'>
            <h1 className='footer-title'>CONTACT ME</h1>

            <div className='footer-txt'>
                <p className='footer-p'><a target='_blank' href='https://www.linkedin.com/in/joaquin-santillan-1b9919222/'>LINKEDIN</a></p>
                <img className='one-footer' src={one}/>
                <p className='footer-p'><a target='_blank' href='https://github.com/JoaquinSantillan'>GITHUB</a></p>
                <img className='one-footer' src={two}/>
                <p className='footer-p'><a target='_blank' href='https://twitter.com/JoaquinSantil4N'>TWITER</a></p>
                <img className='one-footer' src={treh}/>
            </div>
        </footer>
    )
}