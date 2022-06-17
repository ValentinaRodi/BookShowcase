/* eslint-disable no-undef */
import React from 'react'

import Order from './Order'
// eslint-disable-next-line import/no-cycle
// import UserOrder from './UserOrder'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      pass: '',
      errorLogin: '',
      errorPass: '',
      order: false,
    }
    this.loginInputRefer = React.createRef()
    this.passInputRefer = React.createRef()
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    if (!/@.com/.test(this.state.login)) {
      event.preventDefault()
      this.loginInputRefer.current.style.backgroundColor = '#fdd'
      this.loginInputRefer.current.focus()
      this.setState(() => ({ errorLogin: 'Логин должен содержать: @.com' }))
    } else if (this.state.pass.length < 6) {
      event.preventDefault()
      this.loginInputRefer.current.style.backgroundColor = ''
      this.setState(() => ({ errorLogin: '' }))
      this.passInputRefer.current.style.backgroundColor = '#fdd'
      this.passInputRefer.current.focus()
      this.setState(() => ({
        errorPass: 'Пароль должен быть больше 6 символов',
      }))
    } else this.setState(() => ({ order: true }))
  }

  render() {
    return (
      <div>
        {!this.state.order ? (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="login"
              value={this.state.login}
              onChange={this.handleChange}
              ref={this.loginInputRefer}
              placeholder="Логин"
            />
            <span>{this.state.errorLogin}</span>
            <input
              type="text"
              name="pass"
              value={this.state.pass}
              onChange={this.handleChange}
              ref={this.passInputRefer}
              placeholder="Пароль"
            />
            <span>{this.state.errorPass}</span>
            <input type="submit" value="Войти" />
          </form>
        ) : (
          <UserContext.Provider value={this.state.login}>
            <Order userEmail={this.state.login} />
          </UserContext.Provider>
        )}
      </div>
    )
  }
}
export const UserContext = React.createContext('123')
export default Form
