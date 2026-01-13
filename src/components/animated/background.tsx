export function AnimatedBlobs() {
    return (
        <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/4 top-1/4 size-96 animate-blob rounded-full bg-purple-600/10 blur-[120px]" />
            <div className="animation-delay-2000 absolute right-1/4 top-1/3 size-96 animate-blob rounded-full bg-blue-600/10 blur-[120px]" />
            <div className="animation-delay-4000 absolute bottom-1/4 left-1/3 size-96 animate-blob rounded-full bg-pink-600/10 blur-[120px]" />
        </div>
    )
}