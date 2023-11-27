import { useState } from "react";
import "./Counter.css"

const Counter = () => {
    const [count, setCount] = useState(0);
    console.log(count)

    const plusEins = () => {
        setCount(count + 1);
    }

    const minusEins = () => {
        if(count > 0) {
            setCount(count -1)
        }
    }

    const reset = () => {
        setCount(0);
    }



    return ( 
        <div className="countcontainer">
            <button onClick={plusEins}>+</button>
            <p>{count}</p>
            <button onClick={minusEins}>-</button>
            <div>
                <button onClick={reset}>reset</button>
            </div>

        </div>
     );
}

export default Counter;