import style from "../styles/Signup.module.css"
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import {Link} from 'react-router-dom'
import Input from "./Input";

const cx=classNames.bind(style);

function Signup(){

    const useValidation= (value , validators)=>{
        const [lengthError,setlengthError]=useState(false)
        const [isEmpty,setEmpty]=useState(true)
        const [Mask,setMask]=useState(true)
    useEffect(()=>{
        for(const item in validators){
            switch (item){
                case 'minLength':
                    value.length < validators[item] ? setlengthError(true) : setlengthError(false);
                    break;
                
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    console.log("Empty"+isEmpty)
                    break;
                
                case 'Mask':
                    (validators[item].test(String(value).toLowerCase()))  ? setMask(false) : setMask(true);
            }
        }
    }, [value])

    return{
        isEmpty,
        lengthError,
        Mask,
    }
        
    }

    const useInput=(initialValue , validators)=>{
        const [value,setValue]=useState(initialValue)
        const [isdirty, setDirty]=useState(false)
        const valid = useValidation(value,validators)
        function onChange(e){
            setValue(e.target.value);
        }

        function onBlur(e){
            setDirty(true);
            console.log(isdirty)
            
        }

        return{
            value,
            onChange,
            isdirty,
            onBlur, 
            ...valid
        }

        
    }

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
    const EmailRegexp=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const text=useInput('', {isEmpty:true , minLength:4})
    const email=useInput('', {isEmpty:true, Mask:EmailRegexp})
    const password=useInput('', {isEmpty:true , minLength:4})
    
    return(
        <div className={style.signbody}> 
        <div className={container_class} id="container">
        <div className={`${style.form_container} ${style.signup}`}>
            <form>
                <h1>Create account</h1>

                <span>Use your email for registration</span>
                <ul>
                    <li>
                        {(text.isdirty && text.isEmpty) &&  <div style={{color:'red'}}>Пустое поле</div>}
                        {(text.isdirty && text.lengthError) &&  <div style={{color:'red'}}>Минимум 4 знака</div>}
                        <input value={text.value} onChange={e=>text.onChange(e)} onBlur={e=>text.onBlur(e)} type="text" placeholder="Name"/>
                    </li>
                    <li>
                        {(email.isdirty && email.isEmpty) &&  <div style={{color:'red'}}>Пустое поле</div>}
                        {(email.isdirty && email.Mask) &&  <div style={{color:'red'}}>Неккоректный email</div>}
                        <input value={email.value} onChange={e=>email.onChange(e)} onBlur={e=>email.onBlur(e)} type="email" placeholder="Email"/>
                    </li>
                    <li>
                        {(password.isdirty && password.isEmpty) &&  <div style={{color:'red'}}>Пустое поле</div>}
                        {(password.isdirty && password.lengthError) &&  <div style={{color:'red'}}>Минимум 4 знака</div>}
                        <input value={password.value} onChange={e=>password.onChange(e)} onBlur={e=>password.onBlur(e)} type="Password" placeholder="Password"/>
                    </li>
                </ul>
                <Link to='/'>
                <button >Sign up</button>
                </Link>
            </form>
        </div>

        <div className={`${style.form_container} ${style.signin}`}>
            <form>
                <h1>Sign In</h1>
                <span>Use your email</span>
                <ul>
                    <li>
                        {(text.isdirty && text.isEmpty) &&  <div style={{color:'red'}}>Пустое поле</div>}
                        {(text.isdirty && text.lengthError) &&  <div style={{color:'red'}}>Минимум 4 знака</div>}
                        <input value={text.value} onChange={e=>text.onChange(e)} onBlur={e=>text.onBlur(e)} type="text" placeholder="Name"/>
                    </li>
                    <li>
                        {(email.isdirty && email.isEmpty) &&  <div style={{color:'red'}}>Пустое поле</div>}
                        {(email.isdirty && email.Mask) &&  <div style={{color:'red'}}>Неккоректный email</div>}
                        <input value={email.value} onChange={e=>email.onChange(e)} onBlur={e=>email.onBlur(e)} type="email" placeholder="Email"/>
                    </li>
                    <li>
                        {(password.isdirty && password.isEmpty) &&  <div style={{color:'red'}}>Пустое поле</div>}
                        {(password.isdirty && password.lengthError) &&  <div style={{color:'red'}}>Минимум 4 знака</div>}
                        <input value={password.value} onChange={e=>password.onChange(e)} onBlur={e=>password.onBlur(e)} type="Password" placeholder="Password"/>
                    </li>
                </ul>
                <a href="https://vk.com/clip243220223_456241503?c=1">Forgot your password?</a>
                <Link to='/'>
                <button >Sign in</button>
                </Link>
            </form>
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