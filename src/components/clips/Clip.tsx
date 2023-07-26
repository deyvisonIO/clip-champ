import Image from "next/image";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";

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

export function Clip({ thumbnail_url, broadcaster_name, title, url }: ClipProps) {
  return (
    <Card className="h-[271px]">
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
      </CardFooter>
    </Card>
  )
}
