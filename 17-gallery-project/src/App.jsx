import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from './components/Card';


const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)

  const getData=async()=>{
  const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
  setUserData(response.data);
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData =  <h3 className='text-gray-400 text-xl absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2'>Loading...</h3>
  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return  <div key={idx}> 
        <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black h-screen text-white p-4 overflow-auto'>
      <button 
      onClick={getData}
      className='bg-green-600 active:scale-95 text-white px-5 py-2 mb-3 rounded '>Get Data
      </button>
      {/* <h1 className='text-6xl bg-red-400 text-gray-200 font-semibold fixed'>{index}</h1> */}
      <div className='flex flex-wrap gap-4 p-4'>
        {printUserData}
      </div>
      
      {/* button for prev Next ---- */}
      <div className='flex items-center p-4 justify-center gap-6 '>
        <button
        style={{opacity: index ==1 ? 0.6 : 1}}
        onClick={()=>{
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
        }} 
        className='bg-amber-400 px-4 py-2 text-sm text-black rounded cursor-pointer active:scale-95 '>Prev</button>
        <h2>Page {index}</h2>
        <button
        onClick={()=>{
          setIndex(index+1)
          setUserData([])
        }}
        className='bg-amber-400 px-4 py-2 text-sm text-black rounded cursor-pointer active:scale-95'>Next</button>
      </div>
    </div>
  )
}

export default App



