
import { useState } from 'react'
import '../../styles/header.css'

export const Header = ()=>{


    return(
    <header className='container' id='home'>

    <div className={`perspective-text`}>

        <div className='perspective-line'>
            <p >HI!</p>
            <p className='color-change'>IM JOAQUIN</p>
        </div>
        <div className='perspective-line'>
            <p>IM JOAQUIN</p>
            <p className='color-change'>FRONT END</p>
        </div>
        <div className='perspective-line'>
            <p>FRONT END</p>
            <p className='color-change'>DEVELOPER</p>
        </div>
        <div className='perspective-line'>
            <p>DEVELOPER</p>
            <p className='color-change'>SEE MORE;)</p>
        </div>
    </div>
    </header>
    )
}