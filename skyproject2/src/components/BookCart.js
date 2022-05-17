/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import MinMaxLazy from './MinMaxLazy'
import GeneralCart from './GeneralCart'
import Select from './Select'
import LoginPass from './LoginPass'

function booksStub() {
  return [
    {
      id: 1,
      title: 'Война и мир - Л.Н.Толстой',
      price: 800,
      rest: 10,
      quantity: 1,
    },
    {
      id: 2,
      title: 'Две жизни - К.Е.Антарова',
      price: 700,
      rest: 5,
      quantity: 1,
    },
    {
      id: 3,
      title: 'Разговор с богом - Н.Д.Уолша',
      price: 1000,
      rest: 2,
      quantity: 1,
    },
    {
      id: 5,
      title: 'Хохот Шамана - В.П.Серкин',
      price: 600,
      rest: 8,
      quantity: 1,
    },
    {
      id: 4,
      title: 'Хроники Ехо - Макс Фрай',
      price: 400,
      rest: 8,
      quantity: 1,
    },
  ]
}
export default function BookCart() {
  const [books, setBooks] = useState(booksStub())

  const setQuantity = (id, quantity) => {
    setBooks(
      books.map((book) => (book.id !== id ? book : { ...book, quantity }))
    )
  }

  const delBook = (e) => {
    setBooks(books.filter(item => +item.id !== +e.target.id))
  }
 
  return (
    <div className="some">
      <h1>books list</h1>
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Delete</th>
          </tr>
          {books.map((book, i) => (
            <tr key={book.id} id={book.id}>
              <td>{i + 1}</td>
              <td>{book.title}</td>
              <td>{book.price}</td>
              <td>
                <MinMaxLazy
                  max={book.rest}
                  current={book.quantity}
                  onChange={(quantity) => setQuantity(book.id, quantity)}
                  onKeyDown={(quantity) => setQuantity(book.id, quantity)}
                />
              </td>
              <td>{book.price * book.quantity}</td>
              <button type='button' id={book.id} onClick={delBook}>x</button>  
            </tr>
          ))}
        </tbody>
      </table>
      <GeneralCart books={books} />
      <Link to="/about">About Shop</Link>
      <div>
        <Link to="/abo">Error404</Link>
      </div>
      <Select/>
      <LoginPass/>
    </div>
  )
}

/* 
const setquantity = (id, quantity) => {
	const newbooks = [ ...books ];
	const productInd = books.findIndex(book => book.id == id);
	const newProduct = { ...books[productInd] };
	newProduct.quantity = quantity;
	newbooks[productInd] = newProduct;
	setbooks(newbooks);
} */
