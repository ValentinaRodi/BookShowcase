function ColorNumber() {
  const number = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

  // const color = []
  // const colorNumber = number.map(num => {
  //   if(num % 2 === 0) {
  //     color.push('green')
  //     return num
  //   } 
  //   if(num > 2) {
  //     // eslint-disable-next-line no-unreachable-loop
  //     for(let i = 2; i < num; i+=1) {
  //       if(num % i === 0) {
  //         color.push('red')
  //         return num
  //       }
  //     }
  //     if(!color[num]) {
  //       color.push('yellow')
  //       return num
  //     }
  //   } return num  
  // })

  return (
    <div className="App">
      <h1 style={{ "padding-left": "50px" }}>Number Generator</h1>
      <div style={{ display: "flex", flexWrap: "wrap", width: "350px", paddingLeft: "50px", gap: "2px" }}>
        {/* {colorNumber.map( (num, i) => (
          <div key={num} style={{ width: "40px", height: "40px", background: `${color[i]}` }}>{num}</div>
        ))}   */}
        {number.map( (num) => {
          if(num % 2 === 0) {
            <div key={num} style={{ width: "40px", height: "40px", background: `green` }}>{num}</div>
          }
          if(num > 2) { 
            for(let i = 2; i < num; i+=1) {
              if(num % i === 0) {
                <div key={num} style={{ width: "40px", height: "40px", background: `yellow` }}>{num}</div>
              }
            }
            <div key={num} style={{ width: "40px", height: "40px", background: `red` }}>{num}</div>
          } 
          return num
        })}  
      </div>
    </div>
  )
}

export default ColorNumber


 