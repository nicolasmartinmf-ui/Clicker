import React from 'react';
import '../sheet-style/Counter.css';
function Counter({numClicks}){
    return(
        <div className="counter">
            {numClicks}
        </div>
    )
}
export default Counter;