"use client";
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

export default function AddTask() {
  const [tasktitle, setTaskTitle] = useState("");
  const router = useRouter();

  const handleClick = async (e: React.FormEvent) => {
    e.preventDefault();
    await postTodo(tasktitle);
    await router.refresh();
    setTaskTitle('')
  };

  return (
    <form onSubmit={handleClick}>
      <input
      
        type="text"
        value={tasktitle}
        onChange={(e) => {
          setTaskTitle(e.target.value);
        }}
        className="border rounded p-1 mr-4 w-60"
      />
      <button className={buttonStyle}>追加</button>
    </form>
  );
}
