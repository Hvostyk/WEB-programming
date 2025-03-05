import style from "../styles/Input.module.css"
function Errors(validators){
    for(item in validators){
        return(
            <div></div>
        )
    }
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
        <input value={inputvalid.value} onChange={e=>inputvalid.onChange(e)} onBlur={e=>inputvalid.onBlur(e)} type={type} placeholder={placeholder}/>
    )
}

export default Input;