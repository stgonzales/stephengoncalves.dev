import { Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="w-full max-w-7xl mx-auto mt-6 mb-16 md:mt-8 md:mb-32 lg:mt-10 px-6 md:px-20 lg:px-16 xl:px-0 flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-4">
        <h1>Contact</h1>
        <Link href='mailto:stephengoncalves.dev@gmail.com' target="_blank" className="flex items-center gap-1 text-orange-500">
          <Mail className="stroke-orange-500"/>
        </Link>
      </div>
    </main>
  )
}