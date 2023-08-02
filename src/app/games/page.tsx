export default function Games() {
  const games: string[] = ["game1", "game2", "game3", "game4"];

  return (
    <div className="flex flex-col gap-2">
      {games.map((game: string) => <div className="w-full h-28 flex items-center bg-neutral-800 hover:border rounded p-4">{game}</div>)} 
    </div>

  )
}
