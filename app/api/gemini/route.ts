import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { message } = await req.json()

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: message }],
            },
          ],
        }),
      }
    )

    const data = await res.json()

    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      'No response from Gemini.'

    return NextResponse.json({ reply })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: 'Failed to fetch Gemini response' },
      { status: 500 }
    )
  }
}