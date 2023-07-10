import Link from "next/link";
import { Search } from "./Search";

export function Header() {
  return (
  <div className="h-14 py-[5px] justify-between flex bg-neutral-800 px-60 items-center">
    <div className="justify-center items-center gap-7 flex">
      <Link href="/" className="text-center text-white text-[32px] font-bold">TwitchChamp</Link>
      <Link href="/channels" className="text-center text-white text-[20px] font-bold">Channels</Link>
      <Link href="/categories" className="text-center text-white text-[20px] font-bold">Games</Link>
    </div>
    <Search />
  </div> 
  )
}
