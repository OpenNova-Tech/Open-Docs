'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Page() {


  return (
    <main className='pt-32 dark:bg-black py-12 px-6'>
      <div className='max-w-4xl mx-auto space-y-12'>
        <motion.header
          className='text-center'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className='text-5xl font-extrabold tracking-tight bg-clip-text text-[#b07219] bg-black'>
            Set in Java
          </h1>
        </motion.header>

        
      </div>
    </main>
  )
}