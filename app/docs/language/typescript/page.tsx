'use client'

import { motion } from 'framer-motion'

export default function Page() {
  return (
    <div className='bg-black p-10 py-32'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='mx-auto max-w-5xl flex flex-col md:flex-row items-center md:items-start gap-20'
      >
        <div>
          <h1 className='text-3xl md:text-5xl max-w-5xl mx-auto font-extrabold text-[#3178c6] mb-4 flex items-center gap-3'>
            <img
              src='/icons/langs/ts.svg'
              alt='TypeScript Logo'
              className='w-10 h-10'
            />
            TypeScript Docs
          </h1>

          <div className='text-neutral-300 text-base md:text-lg flex-1'>
            TypeScript is a strongly typed superset of JavaScript that adds
            static typing, modern tooling, and improved scalability for large
            applications.
            <br />
            <br />
            <span className='text-neutral-400'>👨‍💻 Creator:</span> Anders
            Hejlsberg
            <br />
            <span className='text-neutral-400'>📘 Maintained By:</span>{' '}
            Microsoft
            <br />
            <span className='text-neutral-400'>🚀 Latest Version:</span>{' '}
            TypeScript 5.x+
            <br />
            <br />
            <a
              target='_blank'
              href='https://github.com/microsoft/TypeScript'
              className='text-violet-500 hover:text-violet-400'
            >
              TypeScript Official Repository
            </a>
            <br />
            <br />
            <p className='text-neutral-400 flex items-center gap-2'>
              <span className='font-medium text-neutral-300'>
                OpenDocs Maintainer:
              </span>

              <a
                href='https://github.com/DarkmodeWorking'
                target='_blank'
                className='px-3 py-1 rounded-full bg-neutral-800 text-indigo-300 font-semibold
          hover:bg-neutral-700 transition'
              >
                @Anurag
              </a>
            </p>
          </div>
        </div>

        <div className='flex-shrink-0'>
          <img
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdevblogs.microsoft.com%2Ftypescript%2Fwp-content%2Fuploads%2Fsites%2F11%2F2024%2F12%2FAnders-scaled.jpg&f=1&nofb=1&ipt=c3f151de322934ad5fb6a7d1dd219fb07e6df63c56544fbb4b0c75f4fda8b987'
            alt='Anders Hejlsberg'
            className='w-90 h-90 rounded-full border-8 border-[#3178c6] object-cover'
          />
        </div>
      </motion.div>

      <br />
      <br />
      <br />
      <br />
    </div>
  )
}
