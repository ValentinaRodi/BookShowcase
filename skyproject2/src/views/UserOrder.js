import { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom"
// eslint-disable-next-line import/no-cycle
// eslint-disable-next-line import/no-cycle
import OrderReady from './OrderReady'
import UserContext from '../context/store'

function UserOrder() {
  const navigate = useNavigate()
  const book = useContext(UserContext)
  const [send, setSend] = useState(false)

  const Back = () => {
    navigate('/home')
  }

  const Send = () => {
    setSend(true)
  }

  return (
    <div>
      {!send ? (
        <div className="div2">
          <h1>Input Data</h1>
          <div className="form">
            <p className="text">Email</p>
            <input type="text" name="login" className="input" defaultValue={book} />
            <p className="text">Phone</p>
            <input type="text" name="pass" className="input" />
            <p className="text">Name</p>
            <input type="text" name="name" className="input" />
            <div>
              <button type="button" className="btn1" onClick={Back}>
                Back to cart
              </button>
              <button type="button" className="btn2" onClick={Send}>
                Send
              </button>
            </div>
          </div>
        </div> ) : (<OrderReady />) }
    </div>
  )
}

export default UserOrder
