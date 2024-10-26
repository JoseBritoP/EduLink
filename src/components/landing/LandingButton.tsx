
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

interface LandingButtonProps {
  title:string
  href:string
  className?:string
}
export default function LandingButton({title,href,className}:LandingButtonProps) {
  return (
    <Button aria-label='To inscription page' className={`p-6 text-lg uppercase font-semibold cursor-pointer 
    ${className && className}
    transition-all scale-95 hover:scale-100 duration-100 ease-out
    rounded-full
    `}>
      <Link href={`${href}`}>{title}</Link>
    </Button>
  )
}
