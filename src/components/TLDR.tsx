'use client'
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function TLDR() {
  const [open, setOpen] = useState(false)

  const handleOpenTldr = () => {
    setOpen(!open)
  }

  return (
    <div id="tldr" className="w-full cursor-pointer">
      <div className='flex items-center gap-8 flex-1' onClick={handleOpenTldr}>
        <p className='font-light italic text-slate-500'>TL;DR</p>
        <div className='h-[0.03125rem] bg-slate-500 flex-1 ' />
        <ChevronDown size={20} className={`${open ? 'rotate-180' : 'rotate-0'} transition-transform stroke-slate-500`}/>
      </div>
      {
        open && (
          <div className="mt-5 transition-all">
            <p className="text-justify">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.
            </p>
          </div>
        )
      }
    </div>
  )
}