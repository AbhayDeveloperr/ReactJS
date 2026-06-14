import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  function aChange(){
    console.log('a is changing');
    
  }
  function bChange(){
    console.log('b is changing');
    
  }

  const [a, setA] = useState(0)
  const [b, setb] = useState(0)

  useEffect(function(){
    console.log('useEffect is runninng..');
    
  },[a])

  return (
    <div>
      <h1>A is {a}</h1>
      <h1>B is {b}</h1>
      <button onClick={()=>{
        setA(a+1)
      }}>A</button>
      <button onClick={()=>{
        setb(b-1)
      }}>B</button>
    </div>
  )
}

export default App
