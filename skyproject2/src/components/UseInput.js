/* eslint-disable react/jsx-props-no-spreading */
import { useState } from "react"
import PropTypes from 'prop-types'

const useInputRequired = (initial, required) => {
  const [value, setValue] = useState(initial)
  const [error, setError] = useState(null)

  return {
    value,
    onBlur: e => {
      if (!e.target.value && required) setError("Логин не введен");
      else setError(null);
    },
    onChange: e => setValue(e.target.value),
    error
  }
}
 
function UseInput() {
    const name = useInputRequired('Введите логин', true)
    return (
        <div className="App">
          <form>
          <input {...name}/>
            {name.error && <span style={{ color: 'red'}}>{name.error}</span>}
          </form>
        </div>
    )
}

useInputRequired.propTypes = {
  initial: PropTypes.string,
  required: PropTypes.bool,
}

export default UseInput