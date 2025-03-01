import Link from "next/link"

export default function NotFoundPage() {
  return (
    <div className="w-screen h-screen bg-green flex flex-col items-center justify-center gap-8">
      <p className="text-light text-[50px]/[60px] font-normal">Page not found</p>
      <Link href={'/'} className="border border-light text-green bg-light rounded-[10px] p-[15px] hover:bg-green hover:text-light hover:duration-300">Back to homepage</Link>
    </div>
  )
}
