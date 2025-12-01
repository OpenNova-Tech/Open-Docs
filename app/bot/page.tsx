import React from 'react'
import { Brain, MessageSquare, Code } from 'lucide-react'

export default function Botla() {
  const services = [
    {
      icon: <Brain className='w-8 h-8' />,
      title: 'Interview Experience',
      description: 'Practice and perfect your interview skills with AI-powered mock interviews. Get real-time feedback, personalized questions, and detailed performance analytics to ace your next opportunity.',
    },
    {
      icon: <MessageSquare className='w-8 h-8' />,
      title: 'Simple Chats',
      description: 'Engage in natural, intelligent conversations with our AI assistant. Get instant answers, brainstorm ideas, or simply chat about anything on your mind with context-aware responses.',
    },
    {
      icon: <Code className='w-8 h-8' />,
      title: 'Roadmap Visualizer',
      description: 'Transform your learning journey into clear, actionable roadmaps. Visualize your path to mastery with structured guides, milestones, and personalized learning recommendations.',
    }
  ]

  return (
    <div className='min-h-screen bg-black pt-20'>
      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center'>
        <h2 className='bg-gradient-to-r mx-88 from-[#4285F4] via-[#6858c4] to-[#EA4335] bg-clip-text text-5xl font-bold text-transparent mb-4 h-14'>
          Presenting BOTLA.AI
        </h2>
        <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
          Your personal AI companion for career growth and learning. Master interviews, explore ideas through conversation, and visualize your path to success. <br />
          <br />
          Powered by Google Gemini
        </p>
      </section>

      <section className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div 
              key={index}
              className='bg-neutral-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2'
            >
              <div className='bg-black w-16 h-16 rounded-xl flex items-center justify-center text-[#4c00ff] mb-6'>
                {service.icon}
              </div>
              
              <h3 className='text-2xl font-bold text-gray-100 mb-3'>
                {service.title}
              </h3>
              
              <p className='text-gray-400 mb-6 leading-relaxed'>
                {service.description}
              </p>
              
              
              <button className='mt-6 w-full bg-gradient-to-r from-[#4285F4] via-[#6858c4] to-[#EA4335] text-white py-3 rounded-lg hover:shadow-md transition-shadow font-medium'>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}