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

export default MinMaxLazy

// const MinMax = (initial, required) {
//   // валидация инпута
//   function applyCurrent(num) {
//     const validNum = Math.max(min, Math.min(max, num))
//     onChange(validNum)
//   }

//   function parseCurrentStr(initial, required) {
    
//     // const num = parseInt(e.target.value, 10)
//     // applyCurrent(Number.isNaN(num) ? min : num)
    
//     const [value, setValue] = useState(initial)
//     const [error, setError] = useState(null)

//     return {
//       value,
//       onBlur: e => {
//         if (required) {
//           const num = parseInt(e.target.value, 10)
//           applyCurrent(Number.isNaN(num) ? min : num)
//         }
//         else setError(null);
//       },
//       onChange: e => setValue(e.target.value),
//       error
//     }
//   }

//   const inc = () => applyCurrent(current + 1)
//   const dec = () => applyCurrent(current - 1)

//   return (
//     <div>
//       <button type="button" onClick={dec} className="removeButton">
//         -
//       </button>
//       <input type="text" value={current} onChange={parseCurrentStr} />
//       <button type="button" onClick={inc} className="addButton">
//         +
//       </button>
//     </div>
//   )
// }

// export default MinMax
