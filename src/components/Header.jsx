import style from '../styles/header.module.css';

function Header() {
    return (
        <div>
            <div className={style["header-block"]}>
                <div className={style["header-logo"]}>
                    <img src="../../public/firstpageimg/Logo.svg" alt="Logo" />
                </div>

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
    );
}

export default Header;