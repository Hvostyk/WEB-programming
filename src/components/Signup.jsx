import style from "../styles/Signup.module.css"
import classNames from 'classnames/bind';
import {useState } from 'react';
import { useLocation } from 'react-router-dom'
import Form from "./Form";
const cx=classNames.bind(style);

function Signup(){
    const location = useLocation();
    const activity = location.state;

    const [isactive,setactivity]=useState(activity);

    const container_class=cx({
        'container':true,
        'active':isactive,
    });

    let togglefunc=()=>{
        if(isactive){
            setactivity(false);
        }
        else{
            setactivity(true);
        }
    }
    
    return(
        <div className={style.signbody}> 
            <div className={container_class} id="container">
                <div className={`${style.form_container} ${style.signup}`}>
                    <Form title={'Create account'} span={'Use your email for registration'}></Form>
                </div>

                <div className={`${style.form_container} ${style.signin}`}>
                    <Form title={'Sign In'} span={'Use your email'}></Form>
                
                </div>

                <div className={style.toggle_container}>
                    <div className={style.toggle}>
                        <div className={`${style.toggle_panel} ${style.toggle_left}`}>
                            <h1>Hello, Heart Patient!</h1>
                            <span>Enter your personal details to use all of site features</span>
                            <button className={style.hidden} onClick={togglefunc} id="SignIn">SIGN IN</button>
                        </div>

                        <div className={`${style.toggle_panel} ${style.toggle_right}`}>
                            <h1>Welcome Back!</h1>
                            <span>Enter your personal details to use all of site features</span>
                            <button className={style.hidden} onClick={togglefunc} id="SignUp">SIGN UP</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;