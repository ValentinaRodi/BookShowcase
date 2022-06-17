/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from "react"

export default function Square() {
    const [ isPress1, setIsPress1 ] = useState(false)
    const [ isPress2, setIsPress2 ] = useState(false)

    const handlerPress = (e) => {
        if(e.target.id === '1') {
            if (isPress1 === false) {
                setIsPress1(true)
            }
            if (isPress1 === true) {
                setIsPress1(false)
            }
        }
        if(e.target.id === '2') {
            if (isPress2 === false) {
                setIsPress2(true)
            }
            if (isPress2 === true) {
                setIsPress2(false)
            }
        }
    }

    const styles = ({
        btnBlue: {
            width: '200px',
            height: '200px',
            backgroundColor: 'blue',
        },
        btnGreen: {
            width: '200px',
            height: '200px',
            backgroundColor: 'green',
        },
        btnPress: {
            width: '200px',
            height: '200px',
            backgroundColor: 'red',
        }
    })

    const touchProps1 = {                             
        style: isPress1 ? styles.btnPress : styles.btnBlue,
    }
    const touchProps2 = {                             
        style: isPress2 ? styles.btnPress : styles.btnGreen,
    }

    return (
        <div onClick={handlerPress}>
            <div {...touchProps1} id='1' />
            <div {...touchProps2} id='2' />
        </div>
    )
}