import { useEffect, useRef, useState } from "react"
import { AboutMe } from "./components/aboutMe/AboutMe"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/header/Header"
import CustomCursor from "./components/mouse/Mouse"
import { NavBar } from "./components/Nav/Nav"
import Proyects2 from "./components/proyect2/Proyects2"
import MySkills from "./components/skills/Skills"

export const PortFolio = ()=>{

    const [loading,setLoading] = useState(false)
    const [count,setCount] = useState(0)
    const [tam,setTam] = useState(20)

    const load = useRef()

    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },4500)
    },[setLoading])
    
    useEffect(()=>{
        if(count < 100){
            setTimeout(()=>{
                setCount(count +1)
            },40)
        }else{
            clearInterval()
        }
    },[count])

    useEffect(()=>{
        if(tam < 200){
            setTimeout(()=>{
                setTam(tam +2)
                load.current.style.width = `${tam}px`
                load.current.style.height = `${tam}px`
            },40)
        }else{
            clearInterval()
        }
    },[tam])



    return(
        <>
            <CustomCursor/>
            {
                loading ? (<div className="loading">
                            <div ref={load} className='circle'>
                                <div className="count">{count}%</div>
                            </div>
                            </div>)
                :(<>
                    <NavBar/>
                    <Header/>
                    <AboutMe/>
                    <Proyects2/>
                    <MySkills/>
                    <Footer/>
                </>)
            }
        </>
    )
}