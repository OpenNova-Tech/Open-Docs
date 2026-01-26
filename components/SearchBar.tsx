'use client'

import { Search } from 'lucide-react'
import { useState, KeyboardEvent } from 'react'
import { useRouter } from 'next/navigation'
import { SEARCH_ITEMS, SearchItem } from './search'
import Image from 'next/image'

export default function SearchBar() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)

  const navigateTo = (item: SearchItem) => {
    router.push(item.ref)
    setQuery('')
    setOpen(false)
  }

  const filteredItems = SEARCH_ITEMS.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  )

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && filteredItems.length > 0) {
      navigateTo(filteredItems[0])
    }
  }

  return (
    <div className='relative w-full'>
      <Search className='absolute left-4 top-1/2 -translate-y-1/2 text-white w-5 h-5 z-10' />

      <input
        type='text'
        value={query}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='Search Docs of Languages, Frameworks and Libraries ...'
        className='
          w-full
          rounded-full
          bg-neutral-900/80
          border border-neutral-700
          py-3 pl-12 pr-4
          text-neutral-100
          placeholder-neutral-400
          focus:outline-none
          focus:ring-2
          focus:ring-neutral-500
          backdrop-blur
        '
      />

      {open && query && filteredItems.length > 0 && (
        <div className="absolute mt-2 w-full rounded-xl bg-neutral-900 border border-neutral-700 shadow-lg overflow-hidden z-50">
          {filteredItems.slice(0,5).map((item) => (
            <button
              key={item.ref}
              onClick={() => navigateTo(item)}
              className="
                w-full flex items-center gap-3
                px-4 py-3 text-sm
                text-neutral-200
                hover:bg-neutral-800
                transition
              "
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={18}
                height={18}
                className="shrink-0"
              />
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
