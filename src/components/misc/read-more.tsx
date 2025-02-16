'use client'

import { ChevronDown } from "lucide-react"
import { ReactNode, useState } from "react"

export default function TLDR({ text, children }: { children: ReactNode; text?: string; }) {
  const [open, setOpen] = useState(false)

  const handleOpenTldr = () => {
    setOpen(!open)
  }

  return (
    <>
      <div className='flex items-center gap-1 flex-1 hover:cursor-pointer' onClick={handleOpenTldr}>
        <p className='font-light italic text-xs'>{text ?? "Read more"}</p>
        <ChevronDown size={12} className={`${open ? 'rotate-180' : 'rotate-0'} transition-transform stroke-white`}/>
      </div>
      {open && children}
    </>
  )
}