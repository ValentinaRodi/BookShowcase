/* eslint-disable import/named */
// import { UseContext } from 'react'

import { UserContext } from './Form'

function UserOrder() {
  const Back = () => {
    window.open('/home')
  }

  const Send = () => {
    window.open('/orderReady')
  }

  // const userEmail = UseContext(UserContext)
  return (
    <UserContext.Consumer>
      {(user) => (
        <div className="div2">
          <h1>Input Data</h1>
          <div className="form">
            <p className="text">Email</p>
            <input type="text" name="login" className="input" value={user} />
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
        </div>
      )}
    </UserContext.Consumer>
  )
}

export default UserOrder
