import Input from "./Input";
import { SignupData } from "./SignupData.jsx";
function Form({title,span}){

    const AndrewUrl="http://192.168.1.221:8080/register"

    function makePostRequest(){

        const data={
            text: "Спасибо за регистрацию:"+SignupData.text+"!\n"+"Email:"+SignupData.email+"\n"+"Password:"+SignupData.password+"\n"
        }

        const dataAndrew={
            email: SignupData.email,
            username: SignupData.text,
            password:SignupData.password
        } 
        
        console.log(SignupData)
        
        fetch(AndrewUrl,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataAndrew),
        }).then((response)=>response.json(dataAndrew))

        return fetch(TelegramUrl,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((response)=>response.json(data))
        
    }

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
            <button type="button" onClick={makePostRequest}>{title}</button>
            
        </form>
    );
}

export default Form;