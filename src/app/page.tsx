
import Image from "next/image";
import { Todos } from "../types";
import { FormEvent, useEffect, useState } from "react";
import AddTask from "./_components/AddTask/page";
import Todo from "./_components/Todo/page";


type Hoge={
  title:string;
  id:number
}[]
const hoge:Hoge=[{title:'a',id:1}]
console.log(hoge)

export default function Home() {
  return (
    <div className="pt-32 w-[500px] m-auto flex-col flex items-center">
      <h1 className="text-[32px] font-bold mb-4 text-white">
        Next.js Todo List
      </h1>
      <AddTask />
     <Todo/>
    </div>
  );
}
