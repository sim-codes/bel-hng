import Link from "next/link"

export default function Header() {
    return (
        <div className="max-w-7xl mx-auto p-10 flex justify-between max-h-svh">
            <div className="font-bold text-4xl">
                <Link href="/">@bel</Link>
            </div>
            <ul className="flex gap-2">
                <li className="transition ease-in-out delay-75 hover:bg-white hover:text-[#6148E0] p-3 rounded-full w-32 text-center">
                    <Link href="#about" className="">About</Link>
                </li>
                <li className="transition ease-in-out delay-75 hover:bg-white hover:text-[#6148E0] p-3 rounded-full w-32 text-center">
                    <Link href="#projet">Projects</Link>
                </li>
                <li className="transition ease-in-out delay-75 hover:bg-white hover:text-[#6148E0] p-3 rounded-full w-32 text-center">
                    <Link href="#blog">Blog</Link>
                </li>
                <li className="transition ease-in-out delay-75 hover:bg-white hover:text-[#6148E0] p-3 rounded-full w-32 text-center">
                    <Link href="#contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}