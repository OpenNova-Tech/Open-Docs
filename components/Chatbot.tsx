'use client'

import { useState } from 'react'
import { MessageCircle, User, Bot, SendHorizonal, Loader2 } from 'lucide-react'

type Message = {
	role: 'user' | 'bot'
	text: string
}

export default function Chatbot() {
	const [messages, setMessages] = useState<Message[]>([])
	const [input, setInput] = useState('')
	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)

	const sendMessage = async () => {
		if (!input.trim()) return

		const userMsg: Message = { role: 'user', text: input }
		setMessages((prev) => [...prev, userMsg])
		setInput('')
		setLoading(true)

		try {
			const res = await fetch('/api/chat', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ message: input }),
			})

			const data = await res.json()
			if (res.ok && data.reply) {
				const botMsg: Message = { role: 'bot', text: data.reply }
				setMessages((prev) => [...prev, botMsg])
			} else {
				const errorMsg: Message = { role: 'bot', text: data.reply || '⚠️ Gemini is busy, please try again.' }
				setMessages((prev) => [...prev, errorMsg])
			}
		} catch {
			const errorMsg: Message = { role: 'bot', text: '⚠️ Failed to reach Gemini. Try again later.' }
			setMessages((prev) => [...prev, errorMsg])
		} finally {
			setLoading(false)
		}
	}

	return (
		<>
			{open && (
				<div className='fixed bottom-28 right-12 w-100 shadow-lg bg-zinc-900 flex flex-col rounded-xl overflow-hidden'>

					<div className='relative p-2 bg-gradient-to-r from-[#4285F4] via-[#6858c4] to-[#EA4335] font-bold flex justify-center items-center text-white'>
						Gemini Chat &nbsp; <Bot />
						<button
							onClick={() => setOpen(false)}
							className='absolute right-3 text-gray-300 hover:text-white'
						>
							✕
						</button>
					</div>

					<div className='p-2 overflow-y-auto max-h-100'>
						{messages.map((msg, i) => (
							<div
								key={i}
								className={`my-2 flex items-end ${msg.role === 'user' ? 'justify-end' : 'justify-start'
									}`}
							>
								{msg.role === 'bot' && (
									<div className='w-8 h-8 rounded-full p-[2px] bg-gradient-to-r from-[#4285F4] via-[#6858c4] to-[#EA4335] mr-2'>
										<div className='w-full h-full rounded-full bg-zinc-900 flex items-center justify-center'>
											<Bot className='w-5 h-5 text-white' />
										</div>
									</div>
								)}

								<span
									className={`inline-block px-3 py-2 rounded-lg max-w-[70%] ${msg.role === 'user'
										? 'bg-gradient-to-r from-[#4285F4] via-[#6858c4] to-[#EA4335] text-white'
										: 'bg-zinc-800 text-gray-200'
										}`}
								>
									{msg.text}
								</span>

								{msg.role === 'user' && (
									<div className='w-8 h-8 rounded-full p-[2px] bg-gradient-to-r from-[#4285F4] via-[#6858c4] to-[#EA4335] ml-2'>
										<div className='w-full h-full rounded-full bg-zinc-900 flex items-center justify-center'>
											<User className='w-5 h-5 text-white' />
										</div>
									</div>
								)}
							</div>
						))}

						{loading && (
							<div className='flex items-center text-gray-400 text-sm mt-2'>
								<div className='bg-zinc-800 px-3 py-2 rounded-lg inline-flex items-center'>

									<TypingLoader />
								</div>
							</div>
						)}
					</div>

					<div className='p-2 flex'>
						<input
							value={input}
							onChange={(e) => setInput(e.target.value)}
							className='flex-1 rounded px-2 bg-zinc-800 text-white'
							placeholder='Ask Gemini...'
						/>
						<button
							onClick={sendMessage}
							disabled={loading}
							className='ml-2 px-3 py-1 bg-gradient-to-r from-[#4285F4] via-[#6858c4] to-[#EA4335] text-white rounded disabled:opacity-50'
						>
							{loading ? <Loader2 className='w-5 h-5 animate-spin' /> : <SendHorizonal />}
						</button>
					</div>
				</div>
			)}

			<button
				onClick={() => setOpen(!open)}
				className='fixed bottom-12 right-12 w-12 h-12 rounded-full bg-gradient-to-r from-[#4285F4] via-[#6858c4] to-[#EA4335] text-white flex items-center justify-center shadow-lg'
			>
				<MessageCircle className='w-6 h-6' />
			</button>
		</>
	)
}

function TypingLoader() {
	return (
		<div className='flex space-x-1 items-center ml-2'>
			<span className='w-2 h-2 bg-gray-400 rounded-full animate-bounce' style={{ animationDelay: '0s' }}></span>
			<span className='w-2 h-2 bg-gray-400 rounded-full animate-bounce' style={{ animationDelay: '0.2s' }}></span>
			<span className='w-2 h-2 bg-gray-400 rounded-full animate-bounce' style={{ animationDelay: '0.4s' }}></span>
		</div>
	)
}