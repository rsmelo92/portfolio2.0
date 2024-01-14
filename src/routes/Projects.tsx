import { Suspense } from "react"
import { Canvas } from "@/components/Projects/Canvas"

export const Projects = () => {
  const mockPropsFromRoute = {
    title: "Consultar Processos",
    image: "works/jusbrasil.png",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus doloribus nostrum molestiae rem, magnam totam ad veritatis officia qui. Qui sapiente iusto facere quia. Temporibus voluptatum dolor modi laborum dicta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus doloribus nostrum molestiae rem, magnam totam ad veritatis officia qui. Qui sapiente iusto facere quia. Temporibus voluptatum dolor modi laborum dicta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus doloribus nostrum molestiae rem, magnam totam ad veritatis officia qui. Qui sapiente iusto facere quia. Temporibus voluptatum dolor modi laborum dicta! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus doloribus nostrum molestiae rem, magnam totam ad veritatis officia qui. Qui sapiente iusto facere quia. Temporibus voluptatum dolor modi laborum dicta!"
  }

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Canvas {...mockPropsFromRoute} />
    </Suspense>
  )
}
