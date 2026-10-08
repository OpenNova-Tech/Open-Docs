'use client'

import { motion } from 'framer-motion'
import { Clock, Star } from 'lucide-react'
import { JSX } from 'react'

type Update = {
  id: number
  title: string
  description: string
  date: string
  icon: JSX.Element
}

const updates: Update[] = [
//   {
//     id: 1,
//     title: 'New UI Upgrade',
//     description: 'UI = Improved layout, better spacing, smoother animations',
//     date: '2026-03-01',
//     icon: <IconRocket size={22} />,
//   },
//   {
//     id: 2,
//     title: 'Performance Boost',
//     description: 'Speed = Faster loading, optimized components, reduced bundle',
//     date: '2026-02-25',
//     icon: <Zap size={22} />,
//   },
//   {
//     id: 3,
//     title: 'Bug Fixes',
//     description: 'Fixes = Navbar bug, routing issue, mobile overflow',
//     date: '2026-02-20',
//     icon: <IconBug size={22} />,
//   },
//   {
//     id: 4,
//     title: 'Docs Update',
//     description: 'Docs = Added HTML, CSS, and JS guides',
//     date: '2026-02-15',
//     icon: <IconCode size={22} />,
//   },
//   {
//     id: 5,
//     title: 'Feature Release',
//     description: 'Features = Dark mode, animations, new components',
//     date: '2026-02-10',
//     icon: <Star size={22} />,
//   },
    {
        id: 1,
        title: 'v0.0.1',
        description: 'Initial release and beta features of Open Docs',
        date: '01-03-2026',
        icon: <Star size={22} />
    }
]

export default function Updates() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16 mt-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Project Updates
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Latest changes, improvements, and releases for Open-Docs
          </p>
        </motion.div>

        {/* Updates List */}
        <div className="space-y-6">
          {[...updates].reverse().map((update, index) => (
            <motion.div
              key={update.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="bg-neutral-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <div className="flex items-start gap-4">

                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-black text-rose-500">
                  {update.icon}
                </div>

                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-1">
                    {update.title}
                  </h2>

                  <p className="text-gray-300 mb-2">
                    {update.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-rose-900">
                    <Clock size={14} />
                    <span>{update.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}