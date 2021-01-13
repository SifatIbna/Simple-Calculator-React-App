import React, {useState} from 'react';
// import {useState} from "react/cjs/react.production.min";

const MultiState = () => {

    var [number,setnumber] = useState(0);
    var [str,setStr] = useState("Hello World")
    var [bool,setBool] = useState(true)

    return (
        <div>
            <p>Number = {number}
            <button onClick={function (){
                setnumber(number+1)
            }}>++</button>
            </p>

            <p>
                Greeting  = {str}
                <button onClick={function (){
                    if (bool){
                        setStr("Hello BRO!")
                        setBool(false)
                    }
                    else {
                        setStr("BLEH!")
                        setBool(true)
                    }

                }}>Greetings</button>
            </p>


        </div>
    );
};

export default MultiState;