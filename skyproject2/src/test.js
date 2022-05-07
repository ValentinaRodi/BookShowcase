{/* <p>Price: <b>{props.details.price}/- </b></p>
          <p>Quantity: <b>{props.details.quantity}</b></p> */}
          {/* <button type="button" onClick={incrementUp}>+</button>
          <button type="button" onClick={incrementDown}>-</button> */}


          <OrderDetail 
          key={this.state.details[0].id}
          productName={this.state.details[0].productName}
          price={this.state.details[0].price}
          quantity={this.state.details[0].quantity}
        />

        <OrderDetail {this.state.details.map((card) =>
            (<div key={card.id}>
              <h1>{card.productName}</h1>
              <b>{card.price}</b>
              <b>{card.quantity}</b>
            </div>))} 


if(Number(element.id) === Number(event.target.id)) {
  console.log(element.quantity)
  this.setState((prevState) => ({ element.quantity: Number(prevState.element.quantity) + 1}))
  
  
    // { amount: prevState.amount + element.price}])
}
))