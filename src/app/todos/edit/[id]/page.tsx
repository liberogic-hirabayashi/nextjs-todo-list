"use client";
import React, { ChangeEvent } from "react";
import { useEffect,useRef ,useState} from "react";

const buttonStyle = `border p-1 px-4 rounded text-white`;

// const editBlog = async (
//   title: string | undefined,
//   id: number
// ) => {
//   const res = await fetch(`http://localhost:3000/todos/edit/${id}`, {
//     method: "PUT",
//     body: JSON.stringify({ title, id }),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   console.log(res.json())
//   return res.json();
// };



const getBlogById = async (
  id: number
) => {
  const res = await fetch(`http://localhost:3000/todos/edit/${id}`)
  const data=await res.json()
  return data.post;
};


export default function Page({ params }: { params: { id: number } }) {
 const titleRef=useRef<any>('')


 useEffect(()=>{
  getBlogById(params.id).then((data)=>{
      titleRef.current!.value=data.title;
      console.log(data.title)
  })
  .catch((err)=>{
      console.error('エラーが発生しました',{id:"1"})
  })
  ,[]
})


  return (
    <div className="mt-40">
      <h1 className="text-center mb-4 text-white bold text-[32px] font-bold">Todo 編集</h1>
      <div className="flex justify-center ">
        <input type="text"ref={titleRef} className="border rounded w-60" />
        <div className="ml-4">
          <button className={`${buttonStyle} mr-1 text-green-300`}>編集</button>
          <button className={`${buttonStyle} text-red-200`}>削除</button>
        </div>
      </div>
    </div>
  );
}
