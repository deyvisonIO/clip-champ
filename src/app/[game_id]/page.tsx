import { BoxArt } from "@/components/BoxArt";
import ErrorBoundary from "@/components/ErrorBoundary";
import { TopClipsSelect } from "@/components/TopClipsSelect";
import { Clips } from "@/components/clips/Clips";
import { Suspense } from "react";


export default function Home() {
    
  return (
    <>
      <div>
        <ErrorBoundary fallback="Coul not load game Image">
          <Suspense fallback="Loading..." >
            <BoxArt />
          </Suspense>
        </ErrorBoundary>
        <form>
          <Suspense fallback="Loading..." >
            <TopClipsSelect />
          </Suspense>
        </form>
      </div>
      <ErrorBoundary fallback="Could not load Clips">
        <Suspense fallback="Loading...">
          <Clips />
        </Suspense>
      </ErrorBoundary>
    </>
  )
}
