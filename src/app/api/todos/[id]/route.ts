import { createClient } from "../../libs";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    const id: number = parseInt(req.url.split("/todos/")[1]);
    const title = await req.json();
    await createClient();
    const posts = await prisma.post.delete({
      where: { id },
    });
    return NextResponse.json({ message: "Success", posts });
  } catch (error) {
    return NextResponse.json("DELETE Error");
  } finally {
    await prisma.$disconnect();
  }
};


export const PUT = async (req: Request, res: NextResponse) => {
  try {
    const id: number = parseInt(req.url.split("/todos/")[1]);
    const title = await req.json();
    await createClient();
    const posts = await prisma.post.update({
      data:title,
      where: { id },
    });
    console.log('hoge')
    return NextResponse.json({ message: "Success", posts });
  } catch (error) {
    return NextResponse.json("PUT Error");
  } finally {
    await prisma.$disconnect();
  }
};
