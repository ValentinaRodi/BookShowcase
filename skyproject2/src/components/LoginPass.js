import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Sumbit() {
  const [inputField, setInputField] = useState({
    login: '',
    password: '',
  })

  const inputsHandler = (e) => {
    setInputField(() => ({
      ...inputField,
      [e.target.name]: e.target.value,
    }))
  }

  const navigate = useNavigate();
  function pathHome() {
    navigate('/home')
  }

  const submitButton = () => {
    if(!/@.com/.test(inputField.login)) {
      alert(`Логин должен быть: example@.com!`)
    
    } else if(inputField.password.length < 3) {
      alert(`Пароль должен быть больше 6 символов!`)
    
    } else {
      pathHome()
    }
    
  }

  return (
    <div>
        <input
            type="text"
            name="login"
            onChange={inputsHandler}
            placeholder="Логин"
            value={inputField.login}
            // onBlur={validateLogin}
        />
        <input
            type="text"
            name="password"
            onChange={inputsHandler}
            placeholder="Пароль"
            value={inputField.password}
            // onBlur={validatePass}
        />
        <button type="button" onClick={submitButton}>
            Войти
        </button>
        <div>
          <Link to="/home">Main</Link>
      </div>
    </div>
  )
}

export default Sumbit