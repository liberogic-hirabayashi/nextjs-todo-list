import React from 'react'
import { Todos } from "../../../types";
import Link from 'next/link';


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
    <ul className="w-full">
    {todos.map((todo: Todos) => (
      <li
        key={todo.id}
        className="pb-2 pl-4 border-b border-[#ffffff33] mt-4 text-white "
      >
        <Link className='hover:text-cyan-300 text-lg' href={`/todos/edit/${todo.id}`}>
        {todo.title}
        </Link>
      </li>
    ))}
  </ul>
  )
}
