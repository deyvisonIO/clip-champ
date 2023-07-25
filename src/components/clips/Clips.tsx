'use client'
import { use} from "react";
import { Clip } from "./Clip";
import { useFetch } from "@/lib/hooks/useFetch";

export function Clips() {
  const { data:clips } = use(useFetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/clips/search/game?game_id=516575`));

  console.log(clips);

  return(
    <div>
      {clips.map((clip: any) => <Clip key={clip.id} thumbnail_url={clip.thumbnail_url} broadcaster_name={clip.broadcaster_name} title={clip.title} url={clip.url} />)} 
    </div>
  )

}

