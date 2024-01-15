import classes from './Works.module.css'
import { Canvas as ThreeCanvas } from '@react-three/fiber'
import { ModelBase } from "@/components/Projects/ModelBase"

export const Works = () => {
  return (
    <section className={classes.section}>
      <h2 className={classes.title}>PROJECTS</h2>
      <div className={classes.wrapper}>
        <div className={classes.box}>
        <ThreeCanvas>
          <directionalLight position={[-1, 5, 5]} />
          <ModelBase />
        </ThreeCanvas>
        </div>
      </div>
    </section>
  )
}
