import  react, { useState } from 'react'
import Form from './Comopnents/Form'
import Show_todo_list from './Comopnents/Show_todo_list'


function App() {

  const [todo_list, setTodo_list] = useState([{
    id:1,
    title:'hgggjh ghvhghh hhgfghh hggh'
  },
  {
    id:2,
    title:'hgggjh ghvhghh hhgfghh hggh2'
  },
  {
    id:3,
    title:'hgggjh ghvhghh hhgfghh hggh3'
  }
])
  // console.log(`from ${todo_list}`);
  
  const delete_todo= (id)=>{
    setTodo_list(todo_list.filter((data)=>data.id != id))
  }

  return (
    <>
     <div>
      <h1 className='text-center text-3xl font-bold'> React Todo-List Crud App </h1>
    <Form todo_list={todo_list} setTodo_list= {setTodo_list} />
    <Show_todo_list todo_list={todo_list} delete_todo={delete_todo} />
     </div>
      
    </>
  )
}

export default App
