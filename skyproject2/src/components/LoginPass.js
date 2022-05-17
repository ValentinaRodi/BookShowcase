import { useState } from 'react'

function Sumbit() {
  const [inputField, setInputField] = useState({
    login: '',
    password: '',
  })

  const inputsHandler = (e) => {
    setInputField(() => ({
      ...inputField,
      [e.target.name]: e.target.value,
    }));
  };

  const submitButton = () => {
    
    if(!/@.com/.test(inputField.login)) {
      alert(`Логин должен быть: example@.com!`)
    
    } else if(inputField.password.length < 3) {
      alert(`Пароль должен быть больше 6 символов!`)
    
    } else {
      alert(`Логин: ${inputField.login}  Пароль: ${inputField.password}`)
    }
    
  }

  // const validateLogin = () => {
  //   if (!inputField.login.includes("@") &&  !inputField.login.includes(".com")) {
  //     alert(`Логин должен быть: example@.com!`)
  //   }
  // }

  // const validatePass = () => {
  //   if (inputField.password.length < 3) {
  //     alert(`Пароль должен быть больше 6 символов!`)
  //   }
  // }

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
            Отправить
        </button>
    </div>
  )
}

export default Sumbit