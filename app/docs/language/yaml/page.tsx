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
          <h1 className='text-3xl md:text-5xl max-w-5xl mx-auto font-extrabold text-[#CB171E] mb-4 flex items-center gap-3'>
            <img
              src='/icons/langs/yaml.svg'
              alt='YAML Logo'
              className='w-10 h-10'
            />
            YAML Docs
          </h1>

          <div className='text-neutral-300 text-base md:text-lg flex-1'>
            YAML (YAML Ain’t Markup Language) is a human-readable data
            serialization format commonly used for configuration files, DevOps
            pipelines, and application settings.
            <br />
            <br />
            <span className='text-neutral-400'>👨‍💻 Creator:</span> Clark Evans,
            Ingy döt Net, Oren Ben-Kiki
            <br />
            <span className='text-neutral-400'>📘 Maintained By:</span> YAML
            Working Group
            <br />
            <span className='text-neutral-400'>🚀 Latest Version:</span> YAML
            1.2+
            <br />
            <br />
            <a
              target='_blank'
              href='https://github.com/yaml/yaml-spec'
              className='text-violet-500 hover:text-violet-400'
            >
              YAML Specification Repository
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
            src='https://upload.wikimedia.org/wikipedia/commons/6/63/YAML_logo.svg'
            alt='YAML Logo'
            className='w-90 h-90 rounded-full border-8 border-[#CB171E] bg-white p-4 object-contain'
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
