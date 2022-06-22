import { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom"
// eslint-disable-next-line import/no-cycle
// eslint-disable-next-line import/no-cycle
import OrderReady from './OrderReady'
import UserContext from '../context/store'

function UserOrder(props) {
  const navigate = useNavigate()
  const email = useContext(UserContext)
  const [send, setSend] = useState(false)
  const [phone, setPhone] = useState()
  const [name, setName] = useState()

  const Back = () => {
    navigate('/home')
  }

  const Send = () => {
    setSend(true)
  }

  const handleChangePhone = (e) => {
    setPhone(e.target.value)
  }

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  return (
    <div>
      {!send ? (
        <div className="div2">
          <h1>Input Data</h1>
          <div className="form">
            <p className="text">Email</p>
            <input type="text" name="login" className="input" defaultValue={email} />
            <p className="text">Phone</p>
            <input type="text" name="pass" className="input" value={phone} onChange={handleChangePhone}/>
            <p className="text">Name</p>
            <input type="text" name="name" className="input" value={name} onChange={handleChangeName}/>
            <div>
              <button type="button" className="btn1" onClick={Back}>
                Back to cart
              </button>
              <button type="button" className="btn2" onClick={Send}>
                Send
              </button>
            </div>
          </div>
        </div> ) : (<OrderReady bookSend={props.bookSend} phone={phone} name={name} email={email}/>) }
    </div>
  )
}

export default UserOrder
