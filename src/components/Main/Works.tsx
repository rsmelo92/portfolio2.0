import { 
  BigBlock,
  SmallBlock,
  SmallDoubleBlock
} from "./Blocks"

import classes from './Works.module.css'
import react from "/react.svg"
import tailwind from "/tailwind.png"
import typescript from "/typescript.svg"
import storybook from "/storybook.svg"
import extension from "/works/main3.png"
import clsx from "clsx"

export const Works = () => {
  return (
    <section className={classes.section}>
      <h2 className={classes.title}>Works</h2>
      <div className={classes.grid}>
        <div className={clsx(classes.box)}>
          <p>a1</p>
        </div>
        <div className={clsx(classes.box)}>
          <p>a2</p>
        </div>
        <div className={clsx(classes.box)}>
          <p>a3</p>
        </div>
        <div className={clsx(classes.box)}>
          <p>a4</p>
        </div>
        <div className={clsx(classes.box)}>
          <p>a5</p>
        </div>
        <div className={clsx(classes.box)}>
          <p>b1</p>
        </div>
        <div className={clsx(classes.box)}>
          <p>b2</p>
        </div>
        <div className={clsx(classes.box)}>
          <p>b3</p>
        </div>
        <div className={clsx(classes.box)}>
          <p>c2</p>
        </div>
        <div className={clsx(classes.box)}>
          <p>c5</p>
        </div>
        <div className={clsx(classes.box)}>
          <p>d1</p>
        </div>
        <div className={clsx(classes.box)}>
          <p>d2</p>
        </div>
        <div className={clsx(classes.box)}>
          <p>d3</p>
        </div>
        <div className={clsx(classes.box)}>
          <p>d4</p>
        </div>
        <div className={clsx(classes.box)}>
          <p>d5</p>
        </div>
      </div>
    </section>
  )
}
