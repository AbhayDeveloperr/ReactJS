import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState([10,20,30])

  const buttonClicked=()=>{
    const newNum = [...num]
    newNum.push(99)
    setNum(newNum)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={buttonClicked}>Click Me</button>
    </div>
  )
}

export default App
