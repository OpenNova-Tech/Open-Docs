import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export async function POST(req: Request) {
  try {
    const { message } = await req.json()
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

    const result = await model.generateContent(message)
    const reply = result.response.text()

    return NextResponse.json({ reply })
  } catch (err: any) {
    console.error('Gemini API error:', err)

    return NextResponse.json(
      { reply: '⚠️ Gemini is overloaded right now. Please try again in a moment.' },
      { status: 503 }
    )
  }
}
