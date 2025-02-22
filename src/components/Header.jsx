import style from '../styles/header.module.css';
import classNames from 'classnames/bind';
import { use, useState, useEffect } from "react";

const cx=classNames.bind(style);

function Header() {


    window.onload=()=>{

    };

    let [burgermenu_close,closeburger]=useState("true");
    let [burgermenu_open,openburger]=useState("false");

    const headermenu=cx({
        "header-menu":true,
        "burgermenu_close":burgermenu_close,
        "burgermenu_open":burgermenu_open && !burgermenu_close,
    });

    let burgerbutton=()=>{
        if(burgermenu_close){
            closeburger(false);
            openburger(true);
        }
        else{
            closeburger(true);
            openburger(false);
        }
    }

    return (
        <div>
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
        </div>
    );
}

export default Header;