import style from "../../styles/Home/Gallery.module.css";
import { Gallery_Images } from "../../assets/Images.jsx";
import { Fragment, useRef, useState } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const container = Gallery_Images.map((item) => (
    <Fragment key={item.id}>
        <div id={item.id} className={style["Gallery_Images"]}>
            <img src={item.source} alt={item.id} />
        </div>
    </Fragment>
));


function Gallery() {

    useGSAP(()=>{
        gsap.fromTo('[class*="Gallery"]',{
            y:500,
            opacity:0,
        },{  
            ScrollTrigger:{
                trigger:'[class*="Gallery"]',
                start:"center top",
            },
            y:0,
            opacity:1,
            duration:0.7,
        },)
    })

    const maxKey = Gallery_Images.length - 1;
    const [currentPos, setCurrentPos] = useState(0);
    const [offset, setOffset] = useState(-1250);

    const useImage_pos = () => {
        function onClick(action) {
            switch (action) {
                case "next":
                    if(currentPos+1<=maxKey){
                        setCurrentPos((prev) => (prev + 1 > maxKey ? 0 : prev + 1));
                        setOffset((prev) => prev - 1250);
                    }
                    else if(currentPos+1>maxKey){
                        setCurrentPos(0);
                        setOffset((prev) => prev + 1250*maxKey)
                    }
                    break;
                case "prev":
                    if(currentPos-1>=0){
                        setCurrentPos((prev) => (prev - 1 < 0 ? maxKey : prev - 1));
                        setOffset((prev) => prev + 1250);
                    }
                    else if(currentPos-1<0){
                        setCurrentPos(maxKey);
                        setOffset((prev) => prev - 1250*maxKey)
                    }

                    break;
                default:
                    break;
            }
        }
        return {
            onClick,
        };
    };


    const prevcon = container.slice(0, currentPos);
    const currentcon=container[currentPos]
    const nextcon = container.slice(currentPos + 1, maxKey + 1);

    const img_pos = useImage_pos();

    return (
        <div className={style["Gallery"]}>
            <div className={style["Slides"]} style={{ transform: `translateX(${offset}px)` }}>
            <ul className={style["prevCon"]}>
                        <li>{container[maxKey]}</li>
                        {prevcon.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <ul className={style["currentCon"]}>
                        <li key={currentPos}>{currentcon}</li>
                    </ul>

                    <ul className={style["nextCon"]}>
                        {nextcon.map((item, index) => (
                            <li key={index + currentPos + 1}>{item}</li>
                        ))}
                        <li>{container[0]}</li>
                    </ul>
            </div>
            <button className={style["PrevButt"]} onClick={() => img_pos.onClick("prev")}>prev</button>
            <button className={style["NextButt"]} onClick={() => img_pos.onClick("next")}>next</button>
        </div>
    );
}

export default Gallery;