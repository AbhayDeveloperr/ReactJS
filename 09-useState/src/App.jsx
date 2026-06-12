import React, { useState } from 'react'

const App = () => {
  const[num, setNum] = useState(10)
  const[user, setUser] = useState("Abhay")
  const[users, setUsers] = useState([10,20,30])

  function changeVal(){
    setNum(40)
    setUser('Guru')
    setUsers([40,50,60])
  }
  return (
    <div>
      <h1>Value of num is {num} <br /> users are {users} <br /> value of user is {user}</h1>
      <button onClick={changeVal}>Click</button>
    </div>
  )
}

export default App
