import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getThreads() {
  const threads = await prisma.thread.findMany({
    include: {
      replies: {
        orderBy: { createdAt: 'desc' },
      },
    },
    orderBy: { createdAt: 'desc' },
  })

  return threads.map((t) => ({
    id: t.id,
    title: t.title,
    desc: t.desc,
    category: t.category,
    replies: t.replies.length,
    lastActivity:
      t.replies[0]?.createdAt.toISOString() || t.createdAt.toISOString(),
  }))
}

export async function getThreadById(id: number) {
  return prisma.thread.findUnique({
    where: { id },
    include: { replies: true },
  })
}

export async function createThread(title: string, desc: string, category: string) {
  return prisma.thread.create({
    data: {
      title,
      desc,
      category,
    },
  })
}

export async function addReply(threadId: number, author: string, content: string) {
  return prisma.reply.create({
    data: { threadId, author, content },
  })
}