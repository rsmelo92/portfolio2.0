import { Model } from '../Projects/Model'
import classes from './Works.module.css'
import { Canvas as ThreeCanvas } from '@react-three/fiber'

const SmallCanvas = () => (
  <div style={{ maxWidth: 400, width: "80%", height: 400 }}>
    <ThreeCanvas>
      <directionalLight position={[-5, 5, 5]} />
      <ambientLight intensity={8} />
      <Model image={"works/profile.png"} />
    </ThreeCanvas>
  </div>
)

export const Works = () => {
  return (
    <section className={classes.section}>
      <h2 className={classes.title}>PROJECTS</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <SmallCanvas />
        <SmallCanvas />
        <SmallCanvas />
        <SmallCanvas />
        <SmallCanvas />
        <SmallCanvas />
        <SmallCanvas />
        <SmallCanvas />
      </div>
    </section>
  )
}
