import { useState } from "react";

const Form = () => {

const [firstname, setFirstname] = useState("");
const [lastename, setLastname] = useState("");
const [email, setEmail] = useState("");
    return ( 
        <div>
            <form>
            <input type="text" name="" id="" onChange={(event) => setFirstname(event.target.value)}/>
            <input type="text" name="" id="" onChange={(event) => setLastname(event.target.value)}/>
            <input type="text" onChange={(event) => setEmail(event.target.value)}/>
            </form>
            <p>Vorname: {firstname}</p>
            <p>Nachname: {lastename}</p>
            <p>Email: {email}</p>

        </div>
     );
}

export default Form;