import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])

  const submitHandler = (e)=>{
   e.preventDefault();
   setMainTask([...mainTask,{title,desc}]);
   setTitle("");
   setDesc("");
  }

  let renderTask = <h2 className='text-2xl text-bold'>No task available</h2>
  const deleteHandler =(i)=>{
     let copyTask=[...mainTask];
     copyTask.splice(i,1)
     setMainTask(copyTask);
  }
  if(mainTask.length>0)
  {
    renderTask=mainTask.map((t,i)=>{
     return <li key={i} className='justify-between items-center flex mb-5'>
      <div className='flex items-center justify-between w-2/3'>
       <h5 className='text-2xl font-bold mr-4'>{t.title}</h5>
       <h6 className='text-lg font-semibold'>{t.desc}</h6>
      </div>
      <button 
      onClick={()=>{
        deleteHandler(i)}}
      className='bg-red-400 text-white px-4 py-2 font-bold rounded'>Remove</button>
    </li>
  })
}

  return (
    <>
      <h1 className='bg-black text-white font-bold text-center text-3xl py-4'>Aman's TO-DO list</h1>
      <form onSubmit={submitHandler} className='ml-10'>
        <input type="text" placeholder='Enter Your Task' className='border-2 border-black m-8 px-4 py-2 text-2xl' 
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
        }}
        />
        <input type="text" placeholder='Enter Your Task' className='border-2 border-black m-8 px-4 py-2 text-2xl' 
        value={desc}
        onChange={(e)=>{
         setDesc(e.target.value);
        }}
        />
        <button className='bg-black text-white mx-4 px-4 py-3 text-xl font-bold rounded 
        '>Add task</button>
      </form>
      <div className='my-5 p-8 bg-zinc-500 text-bold justify-between'>
        <ul>
         {renderTask}
        </ul>
      </div>

    </>
  )
}

export default App
