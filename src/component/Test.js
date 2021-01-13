import React,{useState} from 'react';
import NewTest from "./NewTest";
// import  from "react/cjs/react.production.min";

const Test = () => {

    var [str,setStr] = useState("Yo MAN!!")
    return (
        <div>
            <NewTest str = {str} />
        </div>
    );
};

export default Test;