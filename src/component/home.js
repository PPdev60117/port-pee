import React from 'react'
import "./home.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {useRef,useEffect} from "react"

export default function Home() {

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelectorAll(".hello",),
      {
        opacity: 0,
        y: -20
      },
      {
        opacity: 1,
        y: 0,
      
      }
    );
  }, []);

  return (
    <>
        <div className='context' ref={ref}> 
            <p className='hello'>Hello I'm <b>Peerapat</b></p>
            <p className='hello'>Front-end DEVELOPER</p>
            <a href='#contact'><button>Contact</button></a>
        </div>

        <div className='area' >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    </>
  )
}
