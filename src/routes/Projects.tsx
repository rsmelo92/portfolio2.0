import { Suspense } from "react"
import { Canvas } from "../components/Projects/Canvas"

export const Projects = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Canvas />
      </Suspense>
    </>
  )
}
