'use client'

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Search() {

  async function submitSearch(e: any) {
    e.preventDefault();

    console.log("Submiting...")
  }

  return (
    <div >
      <form className="max-w-sm h-10 flex gap-1" onSubmit={(e) => submitSearch(e)}>
        <Input type="text" placeholder="Search..."  />
        <Button type="submit" >
          <img src="iconSearch.svg"  className="w-4"/>
        </Button>
      </form>
    </div>
  )
}
