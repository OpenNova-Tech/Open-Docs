import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions"
import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: {
      id: true,
      username: true,
      realName: true,
      email: true,
      profilePicture: true,
      createdAt: true,
    },
  })

  return NextResponse.json(user)
}
