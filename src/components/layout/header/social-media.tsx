import { Mail } from "lucide-react"
import LinkedIn from "@/components/icons/linkedin"
import Github from "@/components/icons/github"
import X from "@/components/icons/x"
import Link from "next/link"

export async function SocialMedia() {
    return (
        <ul className="w-full flex justify-evenly sm:justify-center sm:gap-12">
            <li className="px-5 py-3">
                <Link href='https://github.com/stgonzales' target="_blank">
                    <Github width={18} height={18} fill="#FFF"/>
                </Link>
            </li>
            <li className="px-5 py-3">
                <Link href='https://www.linkedin.com/in/stephgoncalves/' target="_blank">
                    <LinkedIn width={18} height={18} fill="#FFF"/>
                </Link>
            </li>
            <li className="px-5 py-3">
                <Link href="https://x.com/stepgoncalves" target="_blank">
                    <X width={18} height={18} fill="#FFF"/>
                </Link>
            </li>
            <li className="px-5 py-3">
                <Link href="mailto:stephengoncalves.dev@gmail.com">
                    <Mail size={20} strokeWidth={3}/>
                </Link>
            </li>

        </ul>
    )
}