import style from '../../styles/Home/Firstpage.module.css'

function Home_Firstpage(){
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
                            hello
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