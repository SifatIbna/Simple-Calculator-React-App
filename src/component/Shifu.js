import React, {useState} from 'react';
import './Shifu.css'

function getButton(bool, color, setColor, setBool) {
    if (bool) {
        return <button onClick={() => {
            setColor({
                ...color,
                background: 'blue'
            })
            setBool(!bool)
        }
        }>
            BHAI
        </button>

    } else {
        return <button onClick={function () {
            setColor({
                ...color,
                background: 'black'
            })
            setBool(!bool)
        }
        } className='btn'>BRO</button>
    }
}

const Shifu = () => {
    const css = {
        button: {
            background: 'red',
            color: 'green'
        }
    }

    const [color, setColor] = useState({
        background: 'red',
        color: 'green'
    })

    const [bool, setBool] = useState(true)
    return (
        <div> {
            bool ? <button onClick={() => {
                    setColor({
                        ...color,
                        background: 'blue'
                    })
                    setBool(!bool)
                }
                }>
                    TEST3
                </button> :
                <button onClick={function () {
                    setColor({
                        ...color,
                        background: 'black'
                    })
                    setBool(!bool)
                }
                } className='btn'>ABC</button>


        }

        {
            getButton(bool, color, setColor, setBool)

        }

        </div>
    );
};

export default Shifu;