import React, { useEffect, useState } from 'react'
import classes from "./header.module.scss"
import {BiMenuAltRight} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai"

export default function Header() {

    const [menuOpen,setmenuOpen] = useState(false);
    const [size,setsize] = useState({
        width: undefined,
        height: undefined
    });

    

    useEffect(()=>{
        const handleResize = () =>{
            setsize({
                width:window.innerWidth,
                height:window.innerHeight
            })
        }
        window.addEventListener("resize",handleResize);

        return () => window.removeEventListener("resize",handleResize)
    },[])

    useEffect(()=>{
        if (size.width > 768 && menuOpen){
            setmenuOpen(false)
        }
    },[size.width,menuOpen])

    const menuTogleHandler = () =>{
        setmenuOpen((p) => !p);
    }


  return (
    <div className={classes.header}>
        <div className={classes.header__content}>
            <h1 className={classes.header__content__logo}>LOGO</h1>
            

            <nav className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ""}`} >
                <ul>
                <li>
                        <a href='#home'>Home</a>
                    </li>
                    <li>
                        <a href='#about'>About</a>
                    </li>
                    <li>
                        <a href='#work'>Work</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </nav>

            <div className={classes.header__content__toggle}>
                {!menuOpen ? <BiMenuAltRight onClick={menuTogleHandler}/> : <AiOutlineClose onClick={menuTogleHandler}/> }
            </div>
        </div>
    </div>
  )
}
