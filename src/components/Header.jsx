import style from '../styles/firstpage/header.module.css';

function Header() {
    return (
        <div>
            <div className={style["header-block"]}>
                <div className={style["header-block__logo"]}>
                    <img src="../../public/firstpageimg/Logo.svg" alt="Logo" />
                </div>

                <div className={style["header-block__info"]}>
                    <div className={style["header-block__home"]}>Home</div>
                    <div className={style["header-block__about"]}>About</div>
                    <div className={style["header-block__blog"]}>Blog</div>
                    <div className={style["header-block__pricing"]}>Pricing</div>
                </div>

                <div className={style["header-block__contact"]}></div>
            </div>
        </div>
    );
}

export default Header;