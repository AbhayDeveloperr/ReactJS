import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log('form Submmited by',title);
    setTitle('') 
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter your name' value={title} onChange={(e)=>{
          console.log(e.target.value);
          setTitle(e.target.value);
          
        }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
