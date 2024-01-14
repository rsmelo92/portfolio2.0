import classes from "./Canvas.module.css"

import { Canvas as ThreeCanvas } from '@react-three/fiber'
import { Model } from "./Model"

export const Canvas = () => {
  return (
    <div id="canvas-container" className={classes.container}>
      <ThreeCanvas
        camera={{
          zoom: 4,
          position: [-9.9823411115, -0.4838668706, 0.3445849475]
        }}
      >
        <directionalLight position={[-5, 5, 5]} />
        <ambientLight intensity={8} />
        <Model />
      </ThreeCanvas>
    </div>
  )
}
