

import AddTask from "@/_components/AddTask/page";
import Todo from "@/_components/Todo/page";
import Header from "./_components/header";
import {auth} from '../auth'


export default async function Home() {
  const session =await auth();
  return (
    <>
    <Header/>
    <div className="pt-32 w-[500px] m-auto flex-col flex items-center">
      <h1 className="text-[32px] font-bold mb-4 text-white">
        Next.js Todo List
      </h1>
      <AddTask/>
     <Todo/>
    </div>

    <div className="flex flex-col gap-6">
      <div className="flex flex-col rounded-md bg-neutral-100">
        <div className="p-4 font-bold rounded-t-md bg-neutral-200">
          Current Session
        </div>
        <pre className="py-6 px-4 whitespace-pre-wrap break-all">{JSON.stringify(session,null,2)}</pre>
      </div>
    </div>
    </>
  );
}
