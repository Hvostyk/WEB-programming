import Input from "./Input";

function Form({title,span}){
    const EmailRegexp=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return(
        <form>
            <h1>{title}</h1>
            <span>{span}</span>
            <ul>
                <li>
                    <Input type={'text'} 
                    placeholder={'Name'} 
                    validators={{isEmpty:4,minLength:4}}/>
                </li>
                <li>
                    <Input type={'email'} 
                    placeholder={'Email'} 
                    validators={{isEmpty:4,maskError:EmailRegexp}}/>
                </li>
                <li>
                    <Input type={'password'} 
                    placeholder={'Password'} 
                    validators={{isEmpty:4,minLength:4}}/>
                </li>
            </ul>
            <button type="submit">{title}</button>
            
        </form>
    );
}

export default Form;