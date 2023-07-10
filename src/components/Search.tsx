export function Search() {
  return (
    <div className="max-w-sm h-10 flex gap-1">
      <input type="search" className="w-[303px] h-10 rounded border border-neutral-700 bg-neutral-900" />
      <button 
        className="flex justify-center w-10 h-10 left-[312px] bg-purple-400 rounded border-2 border-neutral-700       ">
        <img src="iconSearch.svg"  className="w-4"/>
      </button>
    </div>
  )
}
