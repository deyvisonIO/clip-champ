import Image from "next/image";
import { Card, CardContent, CardFooter } from "../ui/card";

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
    <Card>
      <CardContent>
        <Image src={thumbnail_url} width={480} height={272} alt="Clip Thumbnail" />
      </CardContent>
      <CardFooter>
       <p>{broadcaster_name}</p>
       <p>{title}</p>
       <a>{url}</a>
      </CardFooter>
    </Card>
  )
}
