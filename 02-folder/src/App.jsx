// import card from './components/card.jsx'

import Card from "./components/card"
import Navigation from "./components/navigation"

const App = () => {
  return (
    <div>
      <div className='myself'>
        <h1>Abhay</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, assumenda.</p>
      </div>

      {/* {card()} */} 
      <Card />

      <Navigation />   
    </div>
  )
}

export default App
