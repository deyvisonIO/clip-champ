'use client'

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useFetch } from "@/lib/hooks/useFetch";
import { useRouter } from "next/navigation";

export function Search() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter(); 

  async function submitSearch(e: any) {
    e.preventDefault();
    let data;
    try {
      data = await useFetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/clips/search/game?name=${searchText}`);

    } catch( err: unknown) {
      console.error(err);
      data = err;
    } finally {
      console.log(data.id);
      if (!data.error) {
        router.push(`/${data.id}`);
      }
    }
  }

  return (
    <div>
      <form className="max-w-sm h-10 flex gap-1" onSubmit={(e) => submitSearch(e)}>
        <Input 
          type="text" 
          placeholder="Search..." 
          value={searchText} 
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button type="submit" >
          <img src="iconSearch.svg"  className="w-4"/>
        </Button>
      </form>
    </div>
  )
}
