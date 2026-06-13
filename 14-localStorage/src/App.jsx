import React from 'react'

const App = () => {

  const user = {
    name:'guru',
    age:20,
    address:'Deoria'
  }

  localStorage.setItem('user', JSON.stringify(user))

  const getUser = JSON.parse(localStorage.getItem('user'))
  console.log(getUser);
  
  
  return (
    <div>
      
    </div>
  )
}

export default App
