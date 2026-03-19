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
          <h1 className='text-3xl md:text-5xl max-w-5xl mx-auto font-extrabold text-[#00ADD8] mb-4 flex items-center gap-3'>
            <img
              src='/icons/langs/go.svg'
              alt='Go Logo'
              className='w-10 h-10'
            />
            Go Docs
          </h1>

          <div className='text-neutral-300 text-base md:text-lg flex-1'>
            Go (Golang) is a statically typed, compiled programming language
            designed for simplicity, high performance, and excellent support for
            concurrency. It is widely used in cloud systems, networking tools,
            and backend services.
            <br />
            <br />
            <span className='text-neutral-400'>👨‍💻 Creators:</span> Robert
            Griesemer, Rob Pike, Ken Thompson
            <br />
            <span className='text-neutral-400'>📘 Maintained By:</span> Google
            <br />
            <span className='text-neutral-400'>🚀 Latest Version:</span> Go 1.x
            <br />
            <br />
            <a
              target='_blank'
              href='https://github.com/golang/go'
              className='text-violet-500 hover:text-violet-400'
            >
              Go Official Repository
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
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fevrone.com%2Fsites%2Fdefault%2Ffiles%2Fn-fields%2Fcases%2Fgo-speaker.jpg&f=1&nofb=1&ipt=e2fc9d8b8707ee5d8cf4888ac9e78dd7a086a4628579b2754ab7263712001ac1'
            alt='Rob Pike'
            className='w-90 h-90 rounded-full border-8 border-[#00ADD8] object-cover'
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
