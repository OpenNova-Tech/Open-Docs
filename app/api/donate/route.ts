import { NextResponse } from 'next/server'
import { createDonationOrder } from '@/server/donate'

export async function POST(req: Request) {
  try {
    const { amount } = await req.json()

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 })
    }

    const order = await createDonationOrder(amount)
    return NextResponse.json(order)
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
