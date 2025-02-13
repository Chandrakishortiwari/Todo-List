import React from "react";

function ShowTodoList({ todo_list, delete_todo }) {
  console.log(todo_list);

  return (
    <div className=" flex justify-center">
      <ul className="gap-5">
        {todo_list.map((data) => (
          <div className="m-3   border-2 border-amber-400  flex justify-around gap-10">
            <li key={data.id} className=" ">
              {data.title}{" "}
            </li>{" "}
            <div>
              <button className="bg-blue-600 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5  me-2">
                Rename
              </button>{" "}
              <button onClick={()=>delete_todo(data.id)} className="bg-red-600 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2">
                Delete
              </button>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default ShowTodoList;
