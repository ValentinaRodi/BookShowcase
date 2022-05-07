
import React from 'react'

// eslint-disable-next-line import/no-named-as-default
import OrderDetail from './OrderDetail'



export default class Order extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      amount: 0,
      quantity: 0,
     
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

  IncrementQuantityWithPrice = (event) => {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const totalQuantity = this.state.quantity + 1

    // eslint-disable-next-line react/no-access-state-in-setstate
    let totalAmount = this.state.amount

    // eslint-disable-next-line react/no-access-state-in-setstate
    const newDetails = this.state.details.map( (element) => {
      if(Number(element.id) === Number(event.target.id)) {
        totalAmount += element.price
        return ({
          id: element.id,
          productName: element.productName, 
          price: element.price,
          quantity: element.quantity + 1
        })} 
      return ({
        id: element.id,
        productName: element.productName, 
        price: element.price,
        quantity: element.quantity
      })
    })
    
    this.setState({
      amount: totalAmount, 
      quantity: totalQuantity,
      details: newDetails 
    })
  }  

  DecrementQuantityWithPrice = (event) => {
  
    // eslint-disable-next-line react/no-access-state-in-setstate
    let totalQuantity = this.state.quantity

    // eslint-disable-next-line react/no-access-state-in-setstate
    let totalAmount = this.state.amount

    // eslint-disable-next-line react/no-access-state-in-setstate
    const newDetails = this.state.details.map( (element) => {
      if(Number(element.id) === Number(event.target.id) && Number(element.quantity > 0 )) {
        totalQuantity -= 1
        totalAmount -= element.price
        return ({
          id: element.id,
          productName: element.productName, 
          price: element.price,
          quantity: element.quantity - 1
        })} 
      return ({
        id: element.id,
        productName: element.productName, 
        price: element.price,
        quantity: element.quantity
      })
    })
    
    this.setState({
      amount: totalAmount, 
      quantity: totalQuantity,
      details: newDetails 
    })
  }  

  render() {
    return (
      <div className="order">
        {this.state.details.map((card) => (
          <OrderDetail
          key={card.id}
          productName={card.productName}
          price={card.price}
          quantity={card.quantity}
          IncrementQuantityWithPrice={this.IncrementQuantityWithPrice}
          DecrementQuantityWithPrice={this.DecrementQuantityWithPrice}
          id={card.id}
          />
        ))}
        <div className="clear" />
        <p className="total">
          Total Quantity : <b>{this.state.quantity} </b>
        </p>
        <p className="total">
          Total Price : <b>{this.state.amount}  /- </b>
        </p>
      </div>
    )
  }
}
