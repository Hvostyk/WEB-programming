import { Gallery_Images } from "../../assets/Images.jsx";
import { Fragment, startTransition, useEffect,useLayoutEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
import style from "../../styles/Home/Cube.module.css"

function Cube(){
    const cuberef=useRef()
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(()=>{
        gsap.fromTo('[class*="Cube"]',{
            x:400,
            opacity:0,
        },{
            ScrollTrigger:{
                trigger:'[class*="Cube"]',
                start:"center top",
                markers:{
                    startColor:"red",
                    endColor:"red",
                },
            },
            x:0,
            opacity:1,
            duration:2,
        })
    })

    return(
        <div className={style["Cube-back"]} ref={cuberef}>
            <div className={style["Cube"]}>

            </div>
        </div>
    )
}

export default Cube