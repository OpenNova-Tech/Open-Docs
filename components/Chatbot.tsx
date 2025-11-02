'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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

	const messagesEndRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
		}
	}, [messages, loading])

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
				const errorMsg: Message = { role: 'bot', text: data.reply || '⚠️ Botla is busy, please try again.' }
				setMessages((prev) => [...prev, errorMsg])
			}
		} catch {
			const errorMsg: Message = { role: 'bot', text: '⚠️ Failed to reach Botla. Try again later.' }
			setMessages((prev) => [...prev, errorMsg])
		} finally {
			setLoading(false)
		}
	}

	return (
		<>
			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0, scale: 0.8, x: 60, y: 60 }}
						animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
						exit={{ opacity: 0, scale: 0.8, x: 60, y: 60 }}
						transition={{ duration: 0.35, ease: 'easeInOut' }}
						className='fixed bottom-28 right-12 w-80 md:w-100 shadow-lg shadow-[#626262] bg-[#18181b9d] flex flex-col rounded-xl overflow-hidden backdrop-blur-md origin-bottom-right'
					>
						<div className='relative p-2 bg-gradient-to-r from-[#4285F4] via-[#6858c4] to-[#EA4335] font-bold flex justify-center items-center text-white'>
							BOTLA &nbsp; <Bot />
							<button
								onClick={() => setOpen(false)}
								className='absolute right-3 text-gray-300 hover:text-white'
							>
								✕
							</button>
						</div>

						<div className='p-2 overflow-y-auto max-h-100'>
							<AnimatePresence initial={false}>
								{messages.map((msg, i) => (
									<motion.div
										key={i}
										initial={{
											opacity: 0,
											y: msg.role === 'user' ? 10 : -10,
											scale: 0.95,
										}}
										animate={{
											opacity: 1,
											y: 0,
											scale: 1,
										}}
										exit={{ opacity: 0, scale: 0.9 }}
										transition={{ duration: 0.25, ease: 'easeOut' }}
										className={`my-2 flex items-end ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
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
									</motion.div>
								))}
							</AnimatePresence>

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
								onKeyDown={(e) => {
									if (e.key === 'Enter' && !loading) sendMessage()
								}}
								className='flex-1 focus:outline-none focus:ring-0 rounded px-2 bg-zinc-800 text-white'
								placeholder='Ask Botla'
							/>
							<button
								onClick={sendMessage}
								disabled={loading}
								className='ml-2 px-3 py-1 bg-gradient-to-r from-[#4285F4] via-[#6858c4] to-[#EA4335] text-white rounded disabled:opacity-50 cursor-pointer'
							>
								{loading ? <Loader2 className='w-5 h-5 animate-spin' /> : <SendHorizonal />}
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			<motion.button
				whileTap={{ scale: 0.9 }}
				whileHover={{ scale: 1.1 }}
				onClick={() => setOpen(!open)}
				className='fixed bottom-12 right-12 w-12 h-12 rounded-full bg-gradient-to-r from-[#4285F4] via-[#6858c4] to-[#EA4335] text-white flex items-center justify-center shadow-lg cursor-pointer'
			>
				<MessageCircle className='w-6 h-6' />
			</motion.button>
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
