import style from "../../styles/Home/Gallery.module.css";
import { Gallery_Images } from "../../assets/Images.jsx";
import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);

const container = Gallery_Images.map((item) => (
    <Fragment key={item.id}>
        <div id={item.id} className={style["Gallery_Images"]}>
            <img src={item.source} alt={item.id} />
        </div>
    </Fragment>
));

function Gallery() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Состояние для ширины окна
    const offsetWidth = windowWidth * 0.7404762;
    const [offset, setOffset] = useState(-offsetWidth); // Состояние для offset
    // Вычисляем offsetWidth на основе текущей ширины окна

    // Регистрируем ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Анимация с использованием GSAP
    useEffect(() => {
        gsap.context(() => {
            gsap.fromTo('[class*="Gallery"]', {
                y: 400,
                opacity: 0,
            }, {
                scrollTrigger: {
                    trigger: '[class*="Gallery"]',
                    start: "top bottom",
                },
                y: 0,
                opacity: 1,
                duration: 2,
            });
        });
    }, []);

    // Обработчик изменения размера окна

    const maxKey = Gallery_Images.length - 1;
    const [currentPos, setCurrentPos] = useState(0);

    const useImage_pos = () => {
        useEffect(() => {
            const handleResize = () => {
                setWindowWidth(window.innerWidth); // Обновляем ширину окна
                console.log(currentPos)
                setOffset(-(window.innerWidth * 0.7404762*(currentPos+1))); // Пересчитываем offset
            };
    
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, [currentPos]);

        const onClick = (action) => {
            switch (action) {
                case "next":
                    if (currentPos + 1 <= maxKey) {
                        setCurrentPos((prev) => (prev + 1 > maxKey ? 0 : prev + 1));
                        setOffset((prev) => prev - offsetWidth);
                    } else if (currentPos + 1 > maxKey) {
                        setCurrentPos(0);
                        setOffset((prev) => prev + offsetWidth * maxKey);
                    }
                    console.log("penis"+currentPos)
                    break;
                case "prev":
                    if (currentPos - 1 >= 0) {
                        setCurrentPos((prev) => (prev - 1 < 0 ? maxKey : prev - 1));
                        setOffset((prev) => prev + offsetWidth);
                    } else if (currentPos - 1 < 0) {
                        setCurrentPos(maxKey);
                        setOffset((prev) => prev - offsetWidth * maxKey);
                    }
                    break;
                default:
                    break;
            }
        };
        return { onClick };
    };

    const prevcon = container.slice(0, currentPos);
    const currentcon = container[currentPos];
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