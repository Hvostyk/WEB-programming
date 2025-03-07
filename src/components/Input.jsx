import style from "../styles/Input.module.css"
import { use, useEffect, useState } from 'react';
function Errors({validators,inputvalid}){
    const errors=[]
    for(const item in validators){
        switch (item){
            case 'minLength':
                if(inputvalid.isdirty && inputvalid.lengthError){
                    errors.push(<div style={{color:'red'}}>Минимум {validators[item]} знака</div>)
                }
                break;
            
            case 'isEmpty':
                if(inputvalid.isdirty && inputvalid.isEmpty){  
                    errors.push(<div style={{color:'red'}}>Пустое поле</div>)
                }
                break;
            
            case 'maskError':
                if(inputvalid.isdirty && inputvalid.maskError){
                    errors.push(<div style={{color:'red'}}>Неккоректный email</div>)
                }
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
        const [maskError,setmaskError]=useState(true)
    useEffect(()=>{
        for(const item in validators){
            switch (item){
                case 'minLength':
                    value.length < validators[item] ? setlengthError(true) : setlengthError(false);
                    break;
                
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true);
                    break;
                
                    case 'maskError':
                    (!validators[item].test(String(value).toLowerCase()))  ? setmaskError(true) : setmaskError(false);
                    break;
            }
        }
    }, [value])

    return{
        isEmpty,
        lengthError,
        maskError,
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
            <Errors validators={validators} inputvalid={inputvalid}/>
            <input value={inputvalid.value} 
            onChange={e=>inputvalid.onChange(e)} 
            onBlur={e=>inputvalid.onBlur(e)} 
            type={type} 
            placeholder={placeholder} />
        </div>
    )
}

export default Input;