'use client'
import { useEffect, useState } from "react";
import { Clip } from "./Clip";
import { useFetch } from "@/lib/hooks/useFetch";
import { useParams } from "next/navigation";

export function Clips() {
  const game_id = useParams().game_id || '516575';
  const [clips, setClips] = useState([]);

  useEffect(() => {
    useFetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/clips/search/game?game_id=${game_id}`).then(response => setClips(() => response.error ? "" : response.data ));
  }, []);


  console.log("clips", clips);

  if (clips.length == 0) {
    return null;
  }

  return(
    <div className="flex flex-wrap min-w-full mt-1">
      {clips.map((clip: any) => <Clip key={clip.id} thumbnail_url={clip.thumbnail_url} broadcaster_name={clip.broadcaster_name} title={clip.title} url={clip.url} />)} 
    </div>

  )

}

