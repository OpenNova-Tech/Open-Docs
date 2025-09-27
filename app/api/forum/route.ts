// app/api/forum/route.ts
import { NextResponse } from "next/server";
import { getThreads, getThreadById, createThread, addReply } from "@/server/forum";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (id) {
      // Fetch single thread with replies
      const thread = await getThreadById(parseInt(id, 10));
      if (!thread) return NextResponse.json({ error: "Thread not found" }, { status: 404 });
      return NextResponse.json(thread);
    }

    // Fetch all threads
    const threads = await getThreads();
    return NextResponse.json(threads);
  } catch (err) {
    console.error("GET /api/forum error:", err);
    return NextResponse.json({ error: "Failed to fetch threads" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (data.threadId && data.content && data.author) {
  // Posting a reply
  const newReply = await addReply(Number(data.threadId), data.author, data.content);
  return NextResponse.json(newReply, { status: 201 });
}

    // Creating a new thread
    const { title, desc, category } = data;
    if (!title || !desc) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }

    const newThread = await createThread(title, desc, category);
    return NextResponse.json(newThread, { status: 201 });
  } catch (err) {
    console.error("POST /api/forum error:", err);
    return NextResponse.json(
      { error: "Failed to create thread or reply" },
      { status: 500 }
    );
  }
}
