import { useState } from "react"

export default function TextButton() {
    const fragment = "Роман Льва Николаевича Толстого «Война и мир» писался в 1863-1869 годах. Для ознакомления с основными сюжетными линиями романа, предлагаем учащимся 10 класса и всем, кто интересуется русской литературой, прочитать краткое содержание «Война и мир» по главам и частям онлайн."

    const [value, setValue] = useState(fragment)
    const [textButton, setButton] = useState('Скрыть')

    const handlerClick = () => {
        if(value === fragment) {
        setValue('')
        setButton('Показать')
        }
        if(value === '') {
        setValue(fragment)
        setButton('Скрыть')
        }
    }

    return (
        <div>
        <button type='button' onClick={handlerClick}>{textButton}</button>
        <p>{value}</p>  
        </div>
    )
}