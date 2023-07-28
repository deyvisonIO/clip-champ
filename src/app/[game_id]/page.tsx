'use client'
import { Suspense } from "react";
import { TopClipsSelect } from "@/components/TopClipsSelect";
import { Clips } from "@/components/clips/Clips";

export default function Game() {
  return (
    <>
      <div>
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
