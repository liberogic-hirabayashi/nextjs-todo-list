import AddTask from "@/_components/AddTask/page";
import Todo from "@/_components/Todo/page";
import Header from "./_components/header";
import { auth } from "../auth";

export default async function Home() {
  const session = await auth();
  return (
    <>
      <Header />
      <div className="pt-32 w-[500px] m-auto flex-col flex items-center">
      {session ? (
      <>
      
          <h1 className="text-[32px] font-bold mb-4 text-white">
            Next.js Todo List
          </h1>
          <AddTask />
          <Todo />
     
      </>
      ) :<h2 className="text-white text-[24px] font-bold">🔑 サインインしてください</h2>}
      </div>
    </>
  );
}
