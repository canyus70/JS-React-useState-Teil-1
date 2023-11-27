import { useState } from "react";
import "./Dayandnight.css"


const Day = () => {
    const [darkmode, setDarkmode] = useState(false);
    return ( 

        <div className={`ClassIstImmerDa ${darkmode ? "dark" : null}`}>
            <h1>{darkmode ? "Night" : "Day"}</h1>
            <button onClick={() => setDarkmode ((darkmode) => !darkmode)}>{darkmode ? "Change to Day" : "Change to Night"}</button>
        </div>
    );
}

export default Day;