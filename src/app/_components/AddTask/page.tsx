"use client"
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const buttonStyle = `border p-1 px-4 rounded text-white`;

const postTodo = async (title: string) => {
  const res = await fetch("http://localhost:3000/api/todos", {
    method: "POST",
    body: JSON.stringify({ title }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await res.json();
};


export default async function AddTask() {
  const router = useRouter();


  const titleRef = useRef<HTMLInputElement | any>("");
  // const {title,setTitle}=useState<string>('')
  // const title="タイトルが入ります。"
  const inputValue = titleRef.current?.value;

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();
    await postTodo(inputValue);
    await router.refresh();

  };

  useEffect(() => {
    const a = async () => {
     
    };

    a;
  }, [inputValue]);

  return (
    <form onSubmit={handleClick}>
      <input type="text" ref={titleRef}  className="border rounded p-1 mr-4" />
      <button className={buttonStyle}>追加</button>
    </form>
  );
}
