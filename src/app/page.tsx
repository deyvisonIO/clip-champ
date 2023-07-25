import { TopClipsSelect } from "@/components/TopClipsSelect";
import { Clips } from "@/components/clips/Clips";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="pt-5">
      <div>
        <form>
          <Suspense fallback="Loading..." >
            <TopClipsSelect />
          </Suspense>
        </form>
      </div>
      <div className="mt-2">
        <Suspense fallback="Loading...">
          <Clips />
        </Suspense>
      </div>
    </div>
  )
}
