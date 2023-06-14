import Link from "next/link";

export default function Footer(){
  return <footer className="w-full flex justify-center py-2 fixed bottom-0 text-xs">with 🐞 by <Link href={'https://github.com/stgonzales'} target="_blank" className="text-orange-500 hover:text-orange-900">@stgonzales</Link></footer>
}