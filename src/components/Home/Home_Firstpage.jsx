import style from '../../styles/Home/Firstpage.module.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const window_width=window.innerWidth;
let FP_timeline=gsap.timeline();
function Home_Firstpage(){
    useGSAP(()=>{
        FP_timeline.fromTo('[class*="Firstpage__title"]',{
            x:-300,
            opacity:0,
        },{
            ScrollTrigger:{
                trigger: '[class*="Firstpage-block"]',
                start: "center top",
            },
            x:0,
            opacity:1,
            duration:0.7,
        },0.2)
        .fromTo('[class*="Firstpage-slogan"]',{
            x:-300,
            opacity:0,
        },{
            ScrollTrigger:{
                trigger: '[class*="Firstpage-block"]',
                start: "center top",
            },
            x:0,
            opacity:1,
            duration:0.7,
        },0.2)
        .fromTo('[class*="Firstpage-diagrams"]',{
            x:window_width+300,
            opacity:0,
        },{
            ScrollTrigger:{
                trigger: '[class*="Firstpage-block"]',
                start: "center top",
            },
            x:0,
            opacity:1,
            duration:0.7,
        })
        .fromTo('[class*="Firstpage-registration"]',{
            x:-300,
            opacity:0,
        },{
            ScrollTrigger:{
                trigger: '[class*="Firstpage-block"]',
                start: "center top",
            },
            x:0,
            opacity:1,
            duration:0.7,
        })
    });

    return(
        <div>
            <div className={style["Firstpage-block"]}>
                <div className={style["radical-orange"]}></div>
                <div className={style["radical-blue"]}></div>
                <div className={style["Firstpage-info"]}>
                    <div className={style["Firstpage__title"]}>
                        Digitally forward creative
                    </div>

                    <div className={style["Firstpage-slogan"]}>
                        <div className={style["Firstpage-slogan__border"]}></div>
                        <div className={style["Firstpage-slogan__text"]}>When it comes to interactive marketing, we've got you covered. <br />
                        Be where the world is going</div>
                    </div>

                    <div className={style["Firstpage-registration"]}>
                        <form className={style["Firstpage-registration__email"]} type="male" >
                                <input type="email" placeholder='Enter your email'/>
                        </form>

                        <button className={style["Firstpage-registration__button"]}>
                            Try for free
                        </button>
                    </div>
                </div>

                <div className={style["Firstpage-diagrams"]}>
                    <img src="../../../public/Home/diagramms/Sales - Light.png" alt="" />
                    <img src="../../../public/Home/diagramms/Statistic - Light.png" alt="" />
                    <img src="../../../public/Home/diagramms/Customer Growth - Light.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Home_Firstpage;