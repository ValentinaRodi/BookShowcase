import React from 'react'

// eslint-disable-next-line import/no-named-as-default
import OrderDetail from './OrderDetail'
// eslint-disable-next-line import/no-cycle
import UserOrder from './UserOrder'

const bookSend = []

export default class Order extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
       userOrder: false,
      details: [
        {
          id: 1,
          productName: 'Война и мир - Л.Н.Толстой',
          price: 800,
          quantity: 0,
        },
        {
          id: 2,
          productName: 'Две жизни - К.Е.Антарова',
          price: 700,
          quantity: 0,
        },
        {
          id: 3,
          productName: 'Разговор с богом - Н.Д.Уолша',
          price: 1000,
          quantity: 0,
        },
        {
          id: 4,
          productName: 'Хохот Шамана - В.П.Серкин',
          price: 600,
          quantity: 0,
        },
        {
          id: 5,
          productName: 'Хроники Ехо - Макс Фрай',
          price: 400,
          quantity: 0,
        },
      ],
    }
  }

  // eslint-disable-next-line class-methods-use-this
  onClickButton = () => {
    this.setState(() => ({ userOrder: true }))
  }

  onClickBtn = (e) => {
    this.state.details.map((card) => {
      if (+e.target.id === +card.id) {
        const bookUserSend = bookSend.findIndex((item) => +item === +card.id)
        if (bookUserSend === -1) {
          bookSend.push(e.target.id)
        } else {
          bookSend.splice(bookUserSend, 1)
        }
      }
      return bookSend
    })
    console.log(bookSend)
  }

  render() {
    return (
      <div className="div">
        {!this.state.userOrder ? (
          <div className="div">
            <div className="order">
              {this.state.details.map((card) => (
                <OrderDetail
                  key={card.id}
                  productName={card.productName}
                  price={card.price}
                  id={card.id}
                  onClick={this.onClickBtn}
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
          <UserOrder />
        )} 
      </div>
    )
  }
}

// export const BookContext = React.createContext(booksContext)
