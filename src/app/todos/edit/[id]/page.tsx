"use client";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const buttonStyle = `border p-1 px-4 rounded text-white`;

const editTodo = async (title: string | undefined, id: number) => {
  const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify({ title, id }),
    headers: {
      "Content-Type": "application/json",
    },
  });  
  return await res.json();
};
const deleteTodo= async (id: number) => {
  const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });  
  return await res.json();
};

const getBlogById = async (id: number) => {
  const res = await fetch(`http://localhost:3000/api/todos/${id}`);
  const data = await res.json();
  // console.log(data.posts);
  return await data.posts;
};

export default function Page({ params }: { params: { id: number } }) {
  const titleRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(titleRef.current?.value, params.id);
    await editTodo(titleRef.current?.value, params.id);

    router.push("/");
    router.refresh();
  };


  const handleDelete= async()=>{
    await deleteTodo(params.id)
    console.log ('削除')

  }

  useEffect(() => {
    getBlogById(params.id)
      .then((data) => {
        titleRef.current!.value = data.title;
      })
      .catch((err) => {
        console.error("エラーが発生しました", { id: "1" });
      }),
      []
  });

  return (
    <div className="mt-40">
      <h1 className="text-center mb-4 text-white bold text-[32px] font-bold">
        Todo 編集
      </h1>
      <form onSubmit={handleEdit} className="flex justify-center ">
        <input type="text" ref={titleRef} className="border rounded w-60" />
        <div className="ml-4">
          <button
           
            className={`${buttonStyle} mr-1 text-green-300`}
          >
            編集
          </button>
          <button onClick={handleDelete} className={`${buttonStyle} text-red-200`}>削除</button>
        </div>
      </form>
    </div>
  );
}
