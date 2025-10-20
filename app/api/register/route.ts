import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  const { username, realName, email, password, profilePicture } = await req.json()

  if (!email || !password || !username || !realName) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 })
  }

  const existingUser = await prisma.user.findUnique({ where: { email } })
  if (existingUser) {
    return new Response(JSON.stringify({ error: "User already exists" }), { status: 400 })
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      username,
      realName,
      email,
      password: hashedPassword,
      profilePicture,
    },
  })

  return new Response(JSON.stringify({ message: "User registered", user }), { status: 201 })
}
