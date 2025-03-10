import style from "../../styles/Home/Gallery.module.css"
import { Gallery_Images } from "../../assets/Images.jsx";
import { Fragment } from "react";
import { useRef } from "react";
import { useState } from "react";

const container=Gallery_Images.map((item)=>(
    <Fragment key={item.id}>
    <div id={item.id} className={style["Gallery_Images"]}>
        <img src={item.source} alt={item.id} />
        </div>
    </Fragment>
));


function Gallery(){

    const maxKey = Gallery_Images.length - 1;
    const [currentPos, setCurrentPos] = useState(0);

    const useImage_pos=()=>{
        function onClick(action){
            switch(action){
                case "next":
                    console.log("prevcon"+" "+prevcon.length)
                    console.log("nextcon"+" "+nextcon.length)
                    setCurrentPos((prev) => (prev + 1 > maxKey ? 0 : prev + 1));
                    break;
                case "prev":
                    console.log("prevcon"+" "+prevcon.length)
                    console.log("nextcon"+" "+nextcon.length)
                    setCurrentPos((prev) => (prev - 1 < 0 ? maxKey : prev - 1));
                    break;
                default:
                    break;
            }
        }
        return{
            onClick,
        }
    }

    const prevcon = currentPos === 0 ? [] : container.slice(0, currentPos);
    const currentcon=container[currentPos]
    const nextcon = container.slice(currentPos + 1, maxKey + 1);

    const img_pos=useImage_pos()

    console.log("prevcon length:", prevcon);
    console.log("nextcon length:", nextcon);
    console.log(currentPos)
    return(
        <div className={style["Gallery"]}>
            <div className={style["Slides"]}>
                <ul className={style["prevCon"]}>
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
                    </ul>
            </div>
            
        <button onClick={() => img_pos.onClick("prev")}>prev</button>
        <button onClick={() => img_pos.onClick("next")}>next</button>
        </div>
    )
}

export default Gallery;