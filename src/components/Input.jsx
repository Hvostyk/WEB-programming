import style from "../styles/Input.module.css"
import { use, useEffect, useState } from 'react';
function Errors({validators}){
    const errors=[]
    for(const item in validators){
        switch (item){
            case 'minLength':
                errors.push(<div>{ <div style={{color:'red'}}>Минимум {validators[item]} знака</div>}</div>)
                break;
            
            case 'isEmpty':
                errors.push(<div>{ <div style={{color:'red'}}>Пустое поле</div>}</div>)
                break;
            
            case 'Mask':
                errors.push(<div>{<div style={{color:'red'}}>Неккоректный inputvalid</div>}</div>)
                break;
            
            default:
                break;
        }
        
    }
    return (<>{errors}</>);
}

function Input({type, placeholder,validators}){
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
                    break;
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
    const inputvalid=useInput('', validators)
    return(
        <div>
            <Errors validators={validators}/>
            <input value={inputvalid.value} onChange={e=>inputvalid.onChange(e)} onBlur={e=>inputvalid.onBlur(e)} type={type} placeholder={placeholder}/>
        </div>
    )
}

export default Input;