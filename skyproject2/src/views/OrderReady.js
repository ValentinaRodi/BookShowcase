/* eslint-disable import/no-cycle */
import BookCart from "../components/BookCart"

function OrderReady() { 
  return (
    <div className='div'>
      <h3>Name:</h3>
      <h3>Email:</h3>
      <h3>Total Price:</h3>
      <div>
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
              </tbody>
          </table>
      </div>
      <BookCart/>
    </div>
  )
}
export default OrderReady