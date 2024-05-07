import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function GET() {
  const users = await prisma.sy_clco.findMany();
  console.log(users);
  return Response.json({ message: "success" });
}
