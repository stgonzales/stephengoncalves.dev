import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { cms } from "@/lib/data";
import Link from "next/link";

export async function ContactDialog() {
    const { personalDetails } = await cms.findGlobal({
        slug: 'defaults',
        depth: 2,
      })

    return (
        <Dialog>
            <DialogTrigger asChild>
            <button
                className="text-muted-foreground transition-all hover:text-foreground "
                aria-label="Get in contact"
            >
                <p>Get in Contact</p>
            </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
            <DialogHeader>
                <DialogTitle className="text-2xl">Get in Contact</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
                <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Email:
                    </span>
                    <Link
                        href={`mailto:${personalDetails.email}`}
                        className="text-foreground transition-colors hover:text-foreground/80"
                    >
                        {personalDetails.email}
                    </Link>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Phone:
                    </span>
                    <Link
                        href={`tel:+${personalDetails.phone}`}
                        className="text-foreground transition-colors hover:text-foreground/80"
                    >
                        {`+${personalDetails.phone.toString()}`}
                    </Link>
                </div>
            </div>
            </DialogContent>
        </Dialog>
    )
}