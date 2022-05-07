

// const incrementUp = (props) => {
//   props.details.price += 1
// }

// const incrementDown = (props) => {
//   props.details.price -= 1
// }

export default function OrderDetail(props) {

    return (
      <div className="order-detail" key={props.id}>
        <h1 className="shopItem-title">{props.productName}</h1>
        <p className="total">
          Price : <b>{props.price}  /- </b>
        </p>
        <p className="total">
          Quantity : <b>{props.quantity} </b>
        </p>
        <button className="addButton" type="button" id={props.id} onClick={props.IncrementQuantityWithPrice}>
          +
        </button>
        <button className="removeButton" type="button" onClick={props.incrementDown}>
          -
        </button>
      </div>
          
    )
}