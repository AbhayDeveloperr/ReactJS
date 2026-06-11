import React from 'react'

const App = () => {
  const wheelSpeed=(elem)=>{
    if(elem>0){
      console.log("neeche",elem);
      
    }else{
      console.log("upar",elem);
      
    }
    
  }
  return (
    <div onWheel={(elem)=>{
     wheelSpeed(elem.deltaY)
      
    }}>
      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
    </div>
  )
}

export default App
