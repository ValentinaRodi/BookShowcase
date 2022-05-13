export default function GeneralCart({books}) {

    const totalQuantity = books.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0)
  
    const totalAmount = books.map(item => item.price * item.quantity).reduce((prev, curr) => prev + curr, 0)

    return (
        <div>
            <p className="total">
                Total Quantity : <b>{totalQuantity}</b>
            </p>
            <p className="total">
                Total Price : <b>{totalAmount}</b>
            </p>
        </div> 
    )
}