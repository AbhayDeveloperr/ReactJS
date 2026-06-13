import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  
  const [tasks, setTasks] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log(title);
    console.log(details);

    const copyTask= [...tasks]
    copyTask.push({title,details})
    setTasks(copyTask)
    console.log(tasks);
    

    setTitle('')
    setDetails('')
    
  }

  const deleteNote=(idx)=>{
    const copyTask = [...tasks]

    copyTask.splice(idx,1)

    setTasks(copyTask)
  }

  return (
    <div className='h-screen  bg-[#111] text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex justify-between items-start p-10'>
        <div className='flex flex-col w-1/2 items-start gap-4'>
          <h1 className='text-2xl font-bold'>Add Notes</h1>
          <input className='px-5 py-2 w-full border-2 font-medium rounded outline-none' type="text" placeholder='Enter Notes Heading' value={title} onChange={(e)=>{
            setTitle(e.target.value);
            
          }} />
          <textarea className='px-5 py-2 w-full h-32 border-2 font-medium rounded outline-none' type="text" placeholder='Write Details' value={details} onChange={(e)=>{
            setDetails(e.target.value)
          }} />        
          <button className='bg-white w-full font-medium active:scale-95 cursor-pointer text-black px-5 py-2 rounded outline-none'>Add Notes</button>
        </div>
        <img className='w-44 pt-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtOFIB0_cJxWODfvwcRUfHbcLQaB1K7rLegw&s" alt="" />
      </form>

      <div className='p-10'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
            {tasks.map(function(elem,idx){
              return <div key={idx} className="h-52 w-40 rounded-2xl bg-cover text-black px-4 py-8 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]">
                <div>
                  <h3 className='leading-tight text-xl font-bold wrap-break-word'>{elem.title}</h3>
                  <p className='mt-2 leading-tight font-semibold text-sm text-gray-500 wrap-break-word'>{elem.details}</p>
                </div>
                <button onClick={()=>{
                  deleteNote(idx)
                }} className='mt-18 pl-4 active:scale-95 text-red-500 cursor-pointer'>Delete Notes</button>
              </div>
            })}
        </div>
      </div>
    </div>
  )
}

export default App
