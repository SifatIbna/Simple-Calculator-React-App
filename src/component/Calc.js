import React, {useState} from 'react';
import Btn from "./Btn";

const Calc = () => {
    const list = []
    let [display_val, changeDisplayVal] = useState("")
    let [operator, changeOperator] = useState("")
    // let [temp, changeTemp] = useState(0)
    let [firstVal, changeFirstVal] = useState("")
    let [secondVal, changeSecondVal] = useState("")
    let result = 0;

    for (var i = 0; i < 10; i++) {

        list.push(i)
    }


    /**
     Buidling a Simple Calculator
     And showing three buttons per row.
     **/

    return <div>
        {display_val ? display_val:"0"}
        {

            list
                .slice(0, 9)
                .map((value, index) => {

                    if (index % 3 === 0 && list.length - index >= 3) { /** Checking if the index and remaining values is greater than
                     Three **/

                        /**
                         * Though It could have been achieved by doing simple <br> tag
                         * but why not make things complicated :P
                         */
                        return <Btn list={list} index={index} display_val={display_val}
                                    changeDisplayVal={changeDisplayVal}/>
                    }
                })

        }

        <button onClick={function () {
            changeDisplayVal(display_val + list[list.length - 1])
        }}>
            {list[list.length - 1]}
        </button>
        <button onClick={function () {

            changeDisplayVal(display_val+" ")
            changeOperator("+")
        }
        }>
            +
        </button>
        <button onClick={function () {

            changeDisplayVal(display_val+" ")

            changeOperator("-")

        }
        }>
            -
        </button>
        <br/>
        <button onClick={function () {

            if (operator === "+") {

                const vals = display_val.split(" ")

                firstVal = parseInt(vals[0])
                secondVal = parseInt((vals[1]))

                result = firstVal+secondVal
                changeDisplayVal("Result = "+result)

            } else {
                const vals = display_val.split(" ")

                firstVal = parseInt(vals[0])
                secondVal = parseInt((vals[1]))



                result = firstVal-secondVal
                changeDisplayVal("Result = "+result)


            }
        }
        }>
            =
        </button>

        <button onClick={function (){
            changeDisplayVal("")
        }}>
            AC
        </button>
        <br/>

    </div>;
}

export default Calc;