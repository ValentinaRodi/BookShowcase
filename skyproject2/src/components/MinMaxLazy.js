import PropTypes from 'prop-types'

function MinMaxLazy({ min = 1, max, current, onChange }) {
  
  function applyCurrent(num) {
    const validNum = Math.max(min, Math.min(max, num))
    onChange(validNum)
  }

  function onChangeCurrent(event) {
    
    onChange(+event.target.value)
  }

  function parseCurrentStrOnBlur(event) {
    
    const num = parseInt(event.target.value, 10)
    applyCurrent(Number.isNaN(num) ? min : num)
  }
  
  function parseCurrentStrHandle(event) {
    
    if (event.key === 'Enter') {

      const num = parseInt(event.target.value, 10)
      applyCurrent(Number.isNaN(num) ? min : num)
    }
  }

  const inc = () => applyCurrent(current + 1)
  const dec = () => applyCurrent(current - 1)
  
  return (
      <div className="App">
          <button type="button" onClick={dec} className="removeButton">
            -
          </button> 
          <input type="text" value={current} onChange={onChangeCurrent} onBlur={parseCurrentStrOnBlur} onKeyDown={parseCurrentStrHandle} />
          <button type="button" onClick={inc} className="addButton">
            +
          </button>  
      </div>
  )
}

MinMaxLazy.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

MinMaxLazy.defaultProps = {
  min: 1,
}

export default MinMaxLazy