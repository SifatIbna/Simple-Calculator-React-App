import React from 'react';

const Btn = (vals) => {
    let {list,index,display_val,changeDisplayVal} = vals;

    const new_list = []
    for (let i=index;i<=index+3;i++){
        new_list.push(list[i])
    }
    return (
        <div>
            <button onClick={function (){
                changeDisplayVal(display_val+new_list[0])
            }}>
                {new_list[0]}
            </button>

            <button onClick={function (){
                changeDisplayVal(display_val+new_list[1])
            }}>
                {new_list[1]}
            </button>

            <button onClick={function (){
                changeDisplayVal(display_val+new_list[2])
            }}>
                {new_list[2]}
            </button>

        </div>
    );
};

export default Btn;