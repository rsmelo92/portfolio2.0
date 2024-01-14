import classes from "./Canvas.module.css"

import { Canvas as ThreeCanvas } from '@react-three/fiber'
import { Model } from "./Model"

type Props = {
  title: string
  image: string
  content: string
}

export const Canvas = ({ title, image, content }: Props) => {
  return (
    <div id="canvas-container" className={classes.container}>
      <ThreeCanvas>
        <directionalLight position={[-5, 5, 5]} />
        <ambientLight intensity={8} />
        <Model image={image} />
      </ThreeCanvas>
      <h1 className={classes.title}>{title}</h1>
      <article className={classes.article}>
        {content}
      </article>
    </div>
  )
}
