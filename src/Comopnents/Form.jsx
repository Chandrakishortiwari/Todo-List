import React, { useState } from 'react'

function Form({setTodo_list, todo_list}) {
  const [input, setinput] = useState("");
  const hendelSubmit = (e)=>{
     e.preventDefault();
     
     const obj ={
      id:Math.random(),
      title:input
     }

    setTodo_list([...todo_list, obj]);
    setinput("");
     
  }
  return (
    <>
     <form onSubmit={hendelSubmit} className='pt-4 text-center '>
     
    <input type="text"  value={input} onChange={(e)=>setinput(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg mr-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:border-blue-500" placeholder="Todo-Data" required />

     <button type="submit" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Add</button>
     </form>

        
    </>
  )
}

export default Form