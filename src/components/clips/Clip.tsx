'use client'
import Image from "next/image";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Button } from "../ui/button";

interface ClipProps {
  broadcaster_id?: string,
  broadcaster_name: string, 
  created_at?: string 
  creator_id?: string 
  creator_name?: string, 
  duration?: number,
  embed_url?: string,
  game_id?: string
  id?: string
  language?: string
  thumbnail_url: string,
  title: string,
  url: string,
  video_id?: string, 
  view_count?: number, 
  vod_offset?: number, 
}

Storage.prototype.setObj = function (key: string, item: any) {
  return this.setItem(key, JSON.stringify(item));
}

Storage.prototype.getObj = function (key: string) {
  const item: string | null = this.getItem(key);
  if (item)
    return JSON.parse(item);
  return item;
}

export function Clip({ thumbnail_url, broadcaster_name, title, url }: ClipProps) {
  
  const saveClip = () => {
    const clips = localStorage.getObj("Clips");
    console.log(clips);

    if(!clips) {
      localStorage.setObj("Clips", [url])
    } else {
      clips.push(url);

      localStorage.setObj("Clips", clips);
    }
  }

  return (
    <div className="w-[30rem] max-w-[50%] grow shrink-0 flex-basis-auto px-1 mb-4 ml-0 overflow-hidden">
      <Card >
        <CardContent className="pt-1 pb-0 px-2">
          <a href={url} target="_blank">
            <Image src={thumbnail_url} width={480} height={272} alt="Clip Thumbnail" />
          </a>
        </CardContent>
        <CardFooter className="flex-col items-start justify-center font-clamp-1 px-2 py-1 truncate max-w-full">
          <p className="font-bold max-w-full truncate">
          {broadcaster_name}
          </p>
          <p className="font-medium max-w-full truncate">{title}</p>
          <Button onClick={saveClip}>Save</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
