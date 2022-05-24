function ColorNumber() {
  const number = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

  return (
    <div className="App">
      <h1 style={{ "padding-left": "50px" }}>Number Generator</h1>
      <div style={{ display: "flex", flexWrap: "wrap", width: "350px", paddingLeft: "50px", gap: "2px" }}>
        {/* {colorNumber.map( (num, i) => (
          <div key={num} style={{ width: "40px", height: "40px", background: `${color[i]}` }}>{num}</div>
        ))}   */}
        {number.map( (num) => {
             
          let color = ''
          if(num % 2 === 0) {
            color = 'green'
          } else { 
            for(let i = 2; i < num; i+=1) {
              if(num % i === 0) {
                color = 'yellow'
                break
              } else {
                color = 'red'
              }
            } 
          }
          if(num === 1) {
            color = 'yellow'
          } 
          if(num === 2) {
            color = 'red'
          }
          return (<div key={num} style={{ width: "40px", height: "40px", background: `${color}` }}>{num}</div>)
        })}  
      </div>
    </div>
  )
}

export default ColorNumber