import React from 'react'
import "./about.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {useRef,useEffect} from "react"
import ReactTypingEffect from 'react-typing-effect';

export default function About() {

    gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelectorAll(".text"),
      {
        opacity: 0,
        y: -100
      },
      
      {
        duration:1.25,
        opacity: 1,
        y: 0,
        
        scrollTrigger: {
            trigger: element,
            scrub: true,
            start: "top 80%",
            end: "bottom 80%",
            ease: "back",
            overwrite: "auto",
          }
        
      }
    );
  }, []);

  return (
    <div className='box' ref={ref}>
        <div className='box-1'>
            <div>
                <h1 className='text'>About</h1>
            </div>

            <div className='text'>
                <h3 className='cursor'><ReactTypingEffect
                text={["Peerapat", "WEB developer"]}/>
                </h3>
            </div>

            <div>
                <p className='text'>Hello, My name is Peerapat Sattarattana. I would like to be web developer. I studied coding by myself for 1 year.I want to gain experience in order to improve myself.If you want to help me find work experience please contact</p>
            </div>

            <div className='containbox'>
                <div>
                    <h3 className='text'>Skill</h3>
                    <ul className='text'>
                        <li>HTML CSS Javascript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>MongoDb</li>
                        <li>Express.js</li>
                        <li>Python</li>
                    </ul>
                </div>

                <div>
                    <h3 className='text'>Education</h3>
                    <ul className='text'>
                        <li >Electrical engineering</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className='box-2'>
            <div className='card'>

            </div>


        </div>
    </div>
  )
}
