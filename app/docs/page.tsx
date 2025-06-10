import { GradientCard1 } from '@/components/ui/gradient-card-1'
import { GradientCard2 } from '@/components/ui/gradient-card-2'
import { GradientCard3 } from '@/components/ui/gradient-card-3'
import { GradientCard4 } from '@/components/ui/gradient-card-4'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 p-4">
        <Link href='/language'>
          <GradientCard1 />
        </Link>
        <Link href='/frontend'>
          <GradientCard2 />
        </Link>
        <Link href='/backend'>
          <GradientCard3 />
        </Link>
        <Link href='/cp'>
          <GradientCard3 />
        </Link>
      </div>
    </div>
  )
}

export default page