'use client'
import { use, useMemo} from "react";
import { Clip } from "./Clip";
import { useFetch } from "@/lib/hooks/useFetch";

const clipsFetch = useFetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/clips/search/game?game_id=516575`);

export function Clips() {
  const { data:clips } = use(clipsFetch);

  return(
    <div className="mt-2 grid gap-2 grid-cols-4 auto-rows-auto max-h-full">
      {clips.map((clip: any) => <Clip key={clip.id} thumbnail_url={clip.thumbnail_url} broadcaster_name={clip.broadcaster_name} title={clip.title} url={clip.url} />)} 
    </div>

  )

}

