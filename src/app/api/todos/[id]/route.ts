import { createClient } from "../../libs";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const DELETE = async (req: Request, res: NextResponse) => {
  try {
    const id = parseInt(req.url.split("/blog/")[1]);
    // const title =await res.json();
    console.log(id)
    await createClient();
    const posts = await prisma.post.delete({ where: {id} });
    return NextResponse.json({ message: "Success", posts }, { status: 201 });
  } catch (error) {
    return NextResponse.json("POST Error");
  } finally {
    await prisma.$disconnect();
  }
};
