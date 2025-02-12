import { Bug } from "lucide-react";
import Link from "next/link";

export function Footer(){
  return (
    <footer className="w-full flex justify-center items-center py-2 fixed bottom-0 text-xs bg-black">
      with <Bug size={16} strokeWidth={1} className="mx-1"/> by&nbsp;
      <Link href={'https://github.com/stgonzales'} target="_blank" className="text-orange-500 hover:text-orange-900">
        @stgonzales
      </Link>
    </footer>
  )
}