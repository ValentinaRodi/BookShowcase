import { Link } from 'react-router-dom'
import  { useState } from "react"
// eslint-disable-next-line import/no-cycle

export default function OrderDetail(props) {
  const [textButton, setTextButton] = useState('Add to cart')
  const [classButton, setClassButton] = useState('addButton')
  
  const onClick = (e) => {
    props.onClick(e)
    if(textButton === 'Add to cart') {
      setTextButton('Remove item')
      setClassButton('removeButton')

    } else {
      setTextButton('Add to cart')
      setClassButton('addButton')
    }
  }

  return (
    <div className="order-detail" key={props.id}>
      <h3>{props.productName}</h3>
      <p>{props.price}</p>
      <Link to="/about" state={{ bookName: props.productName,  bookPrice: props.price, bookId: props.id }} className="link" id={props.id}>Read more</Link>  
      <button className={classButton} type="button" id={props.id} onClick={onClick} >{textButton}</button>
    </div>
  )
}