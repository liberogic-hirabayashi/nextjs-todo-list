import React from 'react'
import { Todos } from "../../../types";

const buttonStyle = `border p-1 px-4 rounded text-white`;
const getAllList = async () => {
  const res = await fetch("http://localhost:3000/api/todos", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data.posts;

};


export default async function Todo() {
  const todos = await getAllList();
  return (
    <ul className="mt-4 w-full pl-4">
    {todos.map((todo: Todos) => (
      <li
        key={todo.id}
        className="pb-2 list-disc text-white flex items-center"
      >
        {todo.title}
        <div className='ml-auto'>
          <button className={`${buttonStyle} mr-1 text-green-300`}>
            編集
          </button>
          <button className={`${buttonStyle} text-red-200`}>削除</button>
        </div>
      </li>
    ))}
  </ul>
  )
}
