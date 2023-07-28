'use client'

import { useParams } from "next/navigation"
import Image from "next/image"

export function BoxArt() {
  const game_id = useParams().game_id || '516575';

  return (
    <div className="flex justify-center">
      <Image src={`https://static-cdn.jtvnw.net/ttv-boxart/${game_id}-285x380.jpg`} width={142} height={190} alt="game image"/>
    </div>
  )
}
