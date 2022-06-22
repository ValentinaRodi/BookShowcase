import React from 'react'
// eslint-disable-next-line import/no-named-as-default
import OrderDetail from './OrderDetail'
// eslint-disable-next-line import/no-cycle
import UserOrder from './UserOrder'
import BookContext from '../context/books'

const bookSend = []

export default class Order extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      userOrder: false,
    }
   
  }

  onClickButton = () => {
    this.setState(() => ({ userOrder: true }))
  }

  render() {
    const books = this.context
    return (
      <div className="div">
        {!this.state.userOrder ? (
          <div className="div">
            <div className="order">
              {books.map((card) => (
                <OrderDetail
                  key={card.id}
                  productName={card.productName}
                  price={card.price}
                  id={card.id}
                  onClick = {(e) => books.map((car) => {
                    if (+e.target.id === +car.id) {
                      const bookUserSend = bookSend.findIndex((item) => +item === +car.id)
                      if (bookUserSend === -1) {
                        bookSend.push(e.target.id)
                      } else {
                        bookSend.splice(bookUserSend, 1)
                      }
                    }
                    return bookSend})}
                />
              ))}
            </div>
            <div>
              <button
                type="button"
                className="order-detail"
                onClick={this.onClickButton}
              >
                Next
              </button>
            </div>
          </div>
         ) : (
          <UserOrder bookSend={bookSend}/>
        )} 
      </div>
    )
  }
}

Order.contextType = BookContext
