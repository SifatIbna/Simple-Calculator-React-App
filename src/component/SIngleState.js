import React from 'react';
import {useState} from "react/cjs/react.production.min";

const SIngleState = () => {

    var [obj,setObj] = useState({
        number:0,
        string: "YO",
        bool:true
    })
    return (
        <div>
            <p>
                Number = {obj.number}
                <button onClick={function (){
                    setObj({
                        ...obj,
                        number: obj.number+1
                    })
                }}>Increment</button>
            </p>
        </div>
    );
};

export default SIngleState;