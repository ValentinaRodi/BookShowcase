/* eslint-disable import/no-cycle */
import { useContext } from 'react'
import BookContext from '../context/books'

function OrderReady(props) { 
  const books = useContext(BookContext)
  let priceBook = 0
 
  return (
    <div className='div'>
      <h3>Name: {props.name}</h3>
      <h3>Email: {props.email}</h3>
      <h3>Phone: {props.phone}</h3>
      <div>
      <table>
        <tbody>
          <tr>
              <th>Title</th>
              <th>Price</th>
          </tr>
          {books.map((book) => {
            if(+props.bookSend.find(item => +item === +book.id) === +book.id) {
              
              priceBook += book.price
              return ( 
                <tr key={book.id} id={book.id}>
                  <td>{book.productName}</td>
                  <td>{book.price}</td>
                </tr>
              ) 
            } return null})} 
          </tbody>
          <h3>Total Price: {priceBook}</h3>
        </table>
      </div>
    </div>
  )
}

export default OrderReady