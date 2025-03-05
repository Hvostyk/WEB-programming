import style from "../styles/Form.module.css"
import Input from "./Input";

function Form({id}){
    return(
        <div className={style["Form-block"]}>
            <div className={style["Form-grid"]}>
                <Input 
                    type="text"
                    placeholder="Name"
                    validators={{isEmpty:true , minLength:4}}
                />

                <Input 
                    type="email"
                    placeholder="Email"
                    validators={{isEmpty:true, Mask:EmailRegexp}}
                />

                <Input    
                    type="password"
                    placeholder="Password"
                    validators={{isEmpty:true , minLength:4}}
                />
            </div>
        </div>
    );
}

export default Form;