import squares from "/works/squares.webp"
import silhouette from "/works/silhouette.jpg"
import tetris from "/works/tetris.gif"
import lula from "/works/lula.png"
import surfe from "/works/surfe.png"
import consultar from "/works/consultar.webp"
import lesgow from "/works/lesgow.webp"
import bilheteriapp from "/works/bilheteriapp.avif"
import onlineoffice from "/works/oo.png"
import solissolutions from "/works/solissolutions.png"
import ooapp from "/works/ooapp.png"
import student from "/works/student.jpg"
import DS from "/works/DSsurfe.png"
import architect from "/works/architect.gif"
import placeholder from "/works/placeholder.jpg"

import classes from './Works.module.css'
import clsx from "clsx"

type Props = { 
  title?: string
}

export const Works = ({ title }: Props) => {
  return (
    <section className={classes.section}>
      {title && <h2 className={classes.title}>Works</h2>}
      <div className={classes.grid}>
        <div className={classes.box}>
          <div
            style={{
              backgroundImage:`url(${architect})`,
              backgroundSize: "cover",
              backgroundPosition: "center 52%",
              width: "100%",
              height: "100%",
            }} 
          />
        </div>
        <div className={clsx(classes.forceDark, classes.box)}>
          <div
            style={{
              backgroundImage:`url(${DS})`,
              backgroundSize: "cover",
              backgroundPosition:"center",
              width: "100%",
              height: "100%",
            }} 
          />
        </div>
        <div className={classes.box}>
          <div
            style={{
              backgroundImage:`url(${placeholder})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }} 
          />
        </div>
        <div className={clsx(classes.forceDark, classes.box)}>
          <div
            style={{
              backgroundImage:`url(${surfe})`,
              backgroundSize: "cover",
              filter: "invert(100%) contrast(0.9) brightness(0.666)",
              width: "100%",
              height: "100%",
            }} 
          />
        </div>
        <div className={classes.box}>
          <div
            style={{
              backgroundImage:`url(${consultar})`,
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
            }} 
          />
        </div>
        <div className={classes.box}>
          <div
            style={{
              backgroundImage:`url(${lesgow})`,
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
            }} 
          />
        </div>
        <div className={classes.box}>
          <div
            style={{
              backgroundImage:`url(${silhouette})`,
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
            }} 
          />
        </div>
        <div className={classes.box}>
          <div
            style={{
              backgroundImage:`url(${solissolutions})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#0b1319",
              width: "100%",
              height: "100%",
            }} 
          />
        </div>
        <div className={classes.box}>
          <div
            style={{
              backgroundImage:`url(${student})`,
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
            }} 
          />
        </div>
        <div className={clsx(classes.forceDark, classes.box)}>
          <div
            style={{
              backgroundImage:`url(${lula})`,
              backgroundSize: "cover",
              width: "100%",
              filter: "invert(100%) contrast(0.9) brightness(0.666)",
              height: "100%",
            }} 
          />
        </div>
        <div className={classes.box}>
          <div
            style={{
              backgroundImage:`url(${bilheteriapp})`,
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
            }} 
          />
        </div>
        <div className={clsx(classes.forceDark, classes.box)}>
          <div
            style={{
              backgroundImage:`url(${onlineoffice})`,
              backgroundSize: "contain",
              filter: "invert(100%) contrast(0.9) brightness(0.666)",
              backgroundPosition:"center",
              width: "100%",
              height: "100%",
            }} 
          />
        </div>
        <div className={classes.box}>
          <div
            style={{
              backgroundImage:`url(${squares})`,
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
            }} 
          />
        </div>
        <div className={clsx(classes.forceDark, classes.box)}>
          <div
            style={{
              backgroundImage:`url(${ooapp})`,
              backgroundSize: "contain",
              backgroundRepeat:"no-repeat",
              backgroundColor: "white",
              filter: "invert(100%) contrast(0.9) brightness(0.666)",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }} 
          />
        </div>
        <div className={classes.box}>
          <div
            style={{
              backgroundImage:`url(${tetris})`,
              backgroundSize: "cover",
              filter: "invert(100%) contrast(0.9) brightness(0.666)",
              width: "100%",
              height: "100%",
            }} 
          />
        </div>
      </div>
    </section>
  )
}
