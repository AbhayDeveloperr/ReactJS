import React, { useState } from 'react'
import Nav from './components/Nav'

// isme child se property parent me aa raha hai

const App = () => {

  const [theme, setTheme] = useState('Light')

  return (
    <div>
      <h1>Theme is {theme}</h1>
      <Nav theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
