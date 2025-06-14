import { GradientCard1 } from '@/components/ui/gradient-card-1'
import { GradientCard10 } from '@/components/ui/gradient-card-10'
import { GradientCard11 } from '@/components/ui/gradient-card-11'
import { GradientCard2 } from '@/components/ui/gradient-card-2'
import { GradientCard3 } from '@/components/ui/gradient-card-3'
import { GradientCard4 } from '@/components/ui/gradient-card-4'
import { GradientCard5 } from '@/components/ui/gradient-card-5'
import { GradientCard6 } from '@/components/ui/gradient-card-6'
import { GradientCard7 } from '@/components/ui/gradient-card-7'
import { GradientCard8 } from '@/components/ui/gradient-card-8'
import { GradientCard9 } from '@/components/ui/gradient-card-9'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="grid md:grid-cols-3 p-4">
        <Link href='/language'>
          <GradientCard1 />
        </Link>
        <Link href='/development'>
          <GradientCard2 />
        </Link>
        <Link href='/artificial'>
          <GradientCard3 />
        </Link>
        <Link href='/cloud'>
          <GradientCard4 />
        </Link>
        <Link href='/devops'>
          <GradientCard5 />
        </Link>
        <Link href='/cybersecurity'>
          <GradientCard6 />
        </Link>
        <Link href='/web3'>
          <GradientCard10 />
        </Link>
        <Link href='/tools'>
          <GradientCard11 />
        </Link>
        <Link href='/iot'>
          <GradientCard9 />
        </Link>
        <Link href='/theory'>
          <GradientCard7 />
        </Link>
        <Link href='/cp'>
          <GradientCard8 />
        </Link>
        
      </div>
    </div>
  )
}

export default page