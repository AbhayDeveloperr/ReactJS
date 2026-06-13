import React from 'react'

const App = () => {

  const getData=async()=>{
    let response= await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json()
    console.log(data);
    
    
  }

  return (
    <div>
      <button onClick={getData}>Click me</button>
    </div>
  )
}

export default App
