import { Suspense } from "react";
import { TopClipsSelect } from "@/components/TopClipsSelect";
import { Clips } from "@/components/clips/Clips";
import { BoxArt } from "@/components/BoxArt";

export default function Game() {
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
