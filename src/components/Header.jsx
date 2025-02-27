import style from '../styles/header.module.css';
import classNames from 'classnames/bind';
import { useState, useEffect, useRef } from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
const cx = classNames.bind(style);


function Header() {

    // useGSAP(() => {
    //     // gsap code here...
    //     gsap.to('[class*="header-block"]', { x: 360 }); // <-- automatically reverted
    // }); // <-- scope is for selector text (optional)

    const [burgermenu_close, closeburger] = useState(true);
    const [burgermenu_open, openburger] = useState(false);
    const [headerstatus, setheaderstat] = useState(true);
    const lastScrollRef = useRef(0);

    const headermenu = cx({
        "header-menu": true,
        "burgermenu_close": burgermenu_close,
        "burgermenu_open": burgermenu_open && !burgermenu_close,
    });

    const header = cx({
        "header_hidden": !headerstatus,
        "header_visible": headerstatus,
    });

    const burgerbutton = () => {
        if (burgermenu_close) {
            closeburger(false);
            openburger(true);
        } else {
            closeburger(true);
            openburger(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            const isScrollingDown = currentScroll > lastScrollRef.current;

            if (Math.abs(currentScroll - lastScrollRef.current) < 5) return;

            if (isScrollingDown && headerstatus && currentScroll > 700) {
                setheaderstat(false);
            } else if (!isScrollingDown && !headerstatus) {
                setheaderstat(true);
            }

            lastScrollRef.current = currentScroll;
        };

        const throttledScroll = () => {
            let timeout;
            return () => {
                if (!timeout) {
                    timeout = setTimeout(() => {
                        handleScroll();
                        timeout = null;
                    }, 100);
                }
            };
        };

        const scrollHandler = throttledScroll();
        window.addEventListener('scroll', scrollHandler);

        return () => window.removeEventListener('scroll', scrollHandler);
    }, [headerstatus]);

    return (
        <header className={header}>
            <div className={style["header-block"]}>
                <div className={style["header-logo"]}>
                    <img src="../../public/Home/Logo.svg" alt="Logo" />
                </div>

                <div className={style["header-burgerbutt"]} onClick={burgerbutton}>
                    <span></span>
                </div>

                <div className={headermenu}>
                    <div className={style["header-info"]}>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Pricing</li>
                        </ul>
                    </div>

                    <div className={style["header-contact"]}>
                        <div className={style["header-contact__text"]}>Contact Us➔</div>
                        <div className={style["header-contact__border"]}></div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;