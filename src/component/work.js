import React from 'react'
import "./work.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {useRef,useEffect} from "react"

export default function Work() {

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
          ease:"back",
          overwrite:"auto",
          scrollTrigger: {
              trigger: element,
              scrub: true,
              start: "top 40%",
              end: "bottom 20%",
              
            }
          
        }
      );
    }, []);

    useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
          element.querySelectorAll(".box-work-1"),
          {
            opacity: 0,
            y: -100
          },
          
          {
            duration:2,
            opacity: 1,
            y: 0,
            ease:"back",
            overwrite:"auto",
            scrollTrigger: {
                trigger: element,
                scrub: true,
                start: "top 40%",
                end: "bottom 20%",
                
              }
            
          }
        );
      }, []);

      useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
          element.querySelectorAll(".box-work-2"),
          {
            opacity: 0,
            y: -100
          },
          
          {
            duration:3,
            opacity: 1,
            y: 0,
            ease:"back",
            overwrite:"auto",
            scrollTrigger: {
                trigger: element,
                scrub: true,
                start: "top 40%",
                end: "bottom 20%",
                
              }
            
          }
        );
      }, []);

      useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
          element.querySelectorAll(".box-work-3"),
          {
            opacity: 0,
            y: -100
          },
          
          {
            duration:4,
            opacity: 1,
            y: 0,
            ease:"back",
            overwrite:"auto",
            scrollTrigger: {
                trigger: element,
                scrub: true,
                start: "top 40%",
                end: "bottom 20%",
                
              }
            
          }
        );
      }, []);

      useEffect(() => {
        const element = ref.current;
        gsap.fromTo(
          element.querySelectorAll(".box-work-4"),
          {
            opacity: 0,
            y: -100
          },
          
          {
            duration:2.8,
            opacity: 1,
            y: 0,
            ease:"back",
            overwrite:"auto",
            scrollTrigger: {
                trigger: element,
                scrub: true,
                start: "top 40%",
                end: "bottom 20%",
                
              }
            
          }
        );
      }, []);
    


  return (

    <div className='container' ref={ref}>
        <h1 className='text'>MY PROJECT</h1>
        <div className='box-work-1'>
            <a className='link-1' href='https://fontend-mern.onrender.com/'></a>
            <div className='project-1'></div>
            <p>Movie website</p>
        </div>

        <div className='box-work-2'>
            <a className='link-1' href='https://646cf40ddfd26626e8bd62f4--resplendent-tiramisu-ed8e9e.netlify.app/'></a>
            <div className='project-2'></div>
            <p>Blog web appication</p>
        </div>

        <div className='box-work-3'>
            <a className='link-1' href='#contact'></a>
            <div className='project-3'></div>
            <p>please full your project</p>
        </div>

        <div className='box-work-4'>
            <a className='link-1' href='#contact'></a>
            <div className='project-4'></div>
            <p>please full your project</p>
        </div>
    </div>
  )
}
