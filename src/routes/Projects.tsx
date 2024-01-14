import { Canvas } from "../components/Canvas"
import { Suspense } from "react"

export const Projects = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Canvas />
      </Suspense>
    </>
  )
}
