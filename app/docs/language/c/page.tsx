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
          <h1 className='text-3xl md:text-5xl max-w-5xl mx-auto font-extrabold text-[#555555] mb-4 flex items-center gap-3'>
            <img src='/icons/langs/c.svg' alt='C Logo' className='w-10 h-10' />C
            Docs
          </h1>

          <div className='text-neutral-300 text-base md:text-lg flex-1'>
            C is a powerful, low-level programming language widely used for
            operating systems, embedded systems, compilers, and high-performance
            software.
            <br />
            <br />
            <span className='text-neutral-400'>👨‍💻 Creator:</span> Dennis Ritchie
            <br />
            <span className='text-neutral-400'>📘 Standardized By:</span> ISO /
            IEC
            <br />
            <span className='text-neutral-400'>🚀 Latest Standard:</span> C17 /
            C23
            <br />
            <br />
            <a
              target='_blank'
              href='https://github.com/sys-research/c-standard-drafts'
              className='text-violet-500 hover:text-violet-400'
            >
              C Standard Draft Repository
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
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcomputerhistory.org%2Fwp-content%2Fuploads%2F2020%2F01%2F1997_dennis_ritchie-e1580707669503.jpg&f=1&nofb=1&ipt=620be25d5954a14a42cf62623d24306bc8e5fd4c3d7ee66f2b205911715318a2'
            alt='Dennis Ritchie'
            className='w-90 h-90 rounded-full border-8 border-[#555555] object-cover'
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
