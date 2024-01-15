import classes from "./Canvas.module.css"

import { Canvas as ThreeCanvas } from '@react-three/fiber'
import { ModelBase } from "./ModelBase"

type Props = {
  title: string
  image: string
  content: string
}

export const Canvas = ({ title, image, content }: Props) => {
  return (
    <div id="canvas-container" className={classes.container}>
      <ThreeCanvas>
        <directionalLight position={[-1, 5, 5]} />
        <ModelBase />
      </ThreeCanvas>
      <h1 className={classes.title}>{title}</h1>
      <article className={classes.article}>
        {content}
      </article>
    </div>
  )
}
