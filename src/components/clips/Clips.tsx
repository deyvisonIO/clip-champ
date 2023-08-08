'use client'
import { useEffect, useRef, useState } from "react";
import { Clip } from "./Clip";
import { useFetch } from "@/lib/hooks/useFetch";
import { useParams } from "next/navigation";
import { Button } from "../ui/button";
import { dateAtom } from "@/lib/store";
import { useAtomValue } from "jotai";


export function Clips() {
  const game_id = useParams().game_id || '516575';
  const cursor = useRef(null);
  const [clips, setClips] = useState([]);
  const { started_at, ended_at } = useAtomValue(dateAtom); 
  
  let URL = `${process.env.NEXT_PUBLIC_DOMAIN}/api/clips/search/game?game_id=${game_id}`;

  if (started_at) {
    URL += `&started_at=${started_at}`;
  }
  if (ended_at) {
    URL += `&ended_at=${ended_at}`;
  }

  useEffect(() => {
    useFetch(URL).then(response => {
      setClips(() => response.error ? "" : response.data );
      cursor.current = response.error ? null : response.pagination.cursor});
  }, [started_at, ended_at]);

  async function loadClips() {
    console.log("Loading clips...");
    console.log(cursor.current);
    if (cursor) {
    useFetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/clips/search/game?game_id=${game_id}&cursor=${cursor.current}`).then(response => {
      setClips((state) => response.error ? state : state.concat(response.data));
      cursor.current = response.error ? cursor.current : response.pagination.cursor});
    }

  }

  console.log("clips", clips);

  if (clips.length == 0) {
    return null;
  }

  return(
    <>
      <div className="flex flex-wrap min-w-full mt-1">
        {clips.map((clip: any) => <Clip key={clip.id} thumbnail_url={clip.thumbnail_url} broadcaster_name={clip.broadcaster_name} title={clip.title} url={clip.url} />)} 
      </div>
      <div className="flex justify-center">
        <Button className="bg-neutral-100 text-black hover:bg-neutral-100 hover:scale-125 transition-transform" onClick={loadClips}>Load</Button>
      </div>
    </>
  )

}

