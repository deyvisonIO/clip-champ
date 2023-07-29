import { BoxArt } from "@/components/BoxArt";
import { TopClipsSelect } from "@/components/TopClipsSelect";
import { Clips } from "@/components/clips/Clips";
import { Suspense } from "react";


export default function Home() {
    
  return (
    <>
      <div>
        <BoxArt />
        <form>
          <Suspense fallback="Loading..." >
            <TopClipsSelect />
          </Suspense>
        </form>
      </div>
      <Suspense fallback="Loading...">
        <Clips />
      </Suspense>
    </>
  )
}
