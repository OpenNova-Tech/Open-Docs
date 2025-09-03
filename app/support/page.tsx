'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Gift, Sparkles } from 'lucide-react'
import { RazorpayOptions, RazorpayResponse } from '@/types/razorpay'

export default function SupportPage() {
  const [amount, setAmount] = useState('')
  const [loading, setLoading] = useState(false)

  const loadScript = (src: string) => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => resolve(true)
      script.onerror = () => resolve(false)
      document.body.appendChild(script)
    })
  }

  const handleDonate = async () => {
    if (!amount || Number(amount) <= 0) {
      alert('Please enter a valid amount')
      return
    }

    setLoading(true)
    const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
    if (!res) {
      alert('Razorpay SDK failed to load')
      setLoading(false)
      return
    }

    const orderRes = await fetch('/api/donate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount }),
    })

    const order = await orderRes.json()

    const options: RazorpayOptions = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      amount: order.amount,
      currency: 'INR',
      name: 'Our Website',
      description: 'Donation Support',
      order_id: order.id,
      handler: function (response: RazorpayResponse) {
        alert(
          '🎉 Thank you for donating!\nPayment ID: ' +
          response.razorpay_payment_id
        )
      },
      theme: {
        color: '#2a1466',
        backdrop_color: '#1e293b',
      },
    }

    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
    setLoading(false)
  }

  const features = [
    {
      icon: <Gift className='text-yellow-400 animate-pulse w-8 h-8' />,
      title: 'Keep Us Running',
      desc: 'Help cover our server & maintenance costs.',
      animation: { initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 } }
    },
    {
      icon: <Sparkles className='text-indigo-400 animate-pulse w-8 h-8' />,
      title: 'New Features',
      desc: 'Support faster development of exciting features.',
      animation: { initial: { opacity: 0, scale: 0.8, rotate: -10 }, animate: { opacity: 1, scale: 1, rotate: 0 } }
    },
    {
      icon: <Heart className='text-pink-400 animate-pulse w-8 h-8' />,
      title: 'Community Love',
      desc: 'Every donation motivates us to build more for you.',
      animation: { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } }
    },
  ]

  return (
    <div className='flex flex-col items-center justify-center px-6 py-40 bg-black text-white'>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-4xl md:text-5xl font-bold mb-4 flex items-center gap-2'
      >
        Support Us 💙
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className='mb-8 text-gray-300 text-center max-w-xl'
      >
        Your donation helps us keep improving and delivering better experiences.
        Even the smallest contribution makes a <span className='text-indigo-400 font-semibold'>big difference</span>.
      </motion.p>

      <div className='grid md:grid-cols-3 gap-6 mb-10 w-full max-w-4xl'>
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            initial={item.animation.initial}
            animate={item.animation.animate}
            transition={{ delay: 0.3 + idx * 0.2, type: 'spring', stiffness: 100 }}
            whileHover={{ scale: 1.05, rotate: idx === 1 ? 2 : 0 }}
            whileTap={{ scale: 0.97 }}
            className='bg-neutral-950 p-5 rounded-2xl transition shadow-lg hover:shadow-indigo-500'
          >
            <div className='mb-3'>{item.icon}</div>
            <h3 className='text-lg font-semibold mb-1'>{item.title}</h3>
            <p className='text-gray-400 text-sm'>{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className='p-6 rounded-2xl shadow-xl flex flex-col items-center w-full max-w-md bg-neutral-950 border border-slate-800'
      >
        <input
          type='number'
          placeholder='Enter amount (INR)'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className='px-4 py-3 bg-neutral-900 rounded-lg mb-4 w-full text-center text-white outline-none border border-slate-700 focus:border-indigo-500'
        />

        <motion.button
          onClick={handleDonate}
          disabled={loading}
          whileHover={!loading ? { backgroundPosition: '200% center' } : {}}
          whileTap={!loading ? { scale: 0.95 } : {}}
          className='px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-700 bg-[length:200%_100%] text-white rounded-lg shadow-md w-full cursor-pointer font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
        >
          {loading ? (
            <>
              <motion.div
                className='w-5 h-5 border-2 border-white border-t-transparent rounded-full'
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              />
              Processing...
            </>
          ) : (
            'Donate Now'
          )}
        </motion.button>

      </motion.div>
    </div>
  )
}
