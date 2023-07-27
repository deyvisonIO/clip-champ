import Link from "next/link";
import { Search } from "./Search";

export function Header() {
  return (
  <div className="h-14 sm:py-[5px] justify-between flex shrink bg-neutral-800 lg:px-60 items-center">
    <div className="shrink flex justify-center items-center gap-7 max-w-100">
      <Link href="/" className="text-center text-white text-[32px] font-bold">TwitchChamp</Link>
    </div>
    <Search />
  </div> 
  )
}
