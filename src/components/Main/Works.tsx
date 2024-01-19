import clsx from "clsx"
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
            className={classes.boxContent}
            style={{
              backgroundImage:`url(${architect})`,
              backgroundPosition: "center 52%",
            }} 
          />
        </div>
        <div className={clsx(classes.forceDark, classes.box)}>
          <div
            className={classes.boxContent}
            style={{
              backgroundImage:`url(${DS})`,
            }} 
          />
        </div>
        <div className={classes.box}>
          <div
            className={classes.boxContent}
            style={{
              backgroundImage:`url(${placeholder})`,
            }} 
          />
        </div>
        <div className={clsx(classes.forceDark, classes.box)}>
          <div
            className={classes.boxContent}
            style={{
              backgroundImage:`url(${surfe})`,
              filter: "invert(100%) contrast(0.9) brightness(0.666)",
            }} 
          />
        </div>
        <div className={classes.box}>
          <div
            className={classes.boxContent}
            style={{
              backgroundImage:`url(${consultar})`,
            }} 
          />
        </div>
        <div className={classes.box}>
          <div
            className={classes.boxContent}
            style={{
              backgroundImage:`url(${lesgow})`,
            }} 
          />
        </div>
        <div className={classes.box}>
          <div
            className={classes.boxContent}
            style={{
              backgroundImage:`url(${silhouette})`,
            }} 
          />
        </div>
        <div className={classes.box}>
          <div
            className={classes.boxContent}
            style={{
              backgroundImage:`url(${solissolutions})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#0b1319",
            }} 
          />
        </div>
        <div className={classes.box}>
          <div
            className={classes.boxContent}
            style={{
              backgroundImage:`url(${student})`,
            }} 
          />
        </div>
        <div className={clsx(classes.forceDark, classes.box)}>
          <div
            className={classes.boxContent}
            style={{
              backgroundImage:`url(${lula})`,
              filter: "invert(100%) contrast(0.9) brightness(0.666)",
            }} 
          />
        </div>
        <div className={classes.box}>
          <div
            className={classes.boxContent}
            style={{
              backgroundImage:`url(${bilheteriapp})`,
            }} 
          />
        </div>
        <div className={clsx(classes.forceDark, classes.box)}>
          <div
            className={classes.boxContent}
            style={{
              backgroundImage:`url(${onlineoffice})`,
              backgroundSize: "contain",
              backgroundPosition:"center",
              filter: "invert(100%) contrast(0.9) brightness(0.666)",
            }} 
          />
        </div>
        <div className={classes.box}>
          <div
            className={classes.boxContent}
            style={{
              backgroundImage:`url(${squares})`,
            }} 
          />
        </div>
        <div className={clsx(classes.forceDark, classes.box)}>
          <div
            className={classes.boxContent}
            style={{
              backgroundImage:`url(${ooapp})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundColor: "white",
              filter: "invert(100%) contrast(0.9) brightness(0.666)",
            }} 
          />
        </div>
        <div className={classes.box}>
          <div
            className={classes.boxContent}
            style={{
              backgroundImage:`url(${tetris})`,
              filter: "invert(100%) contrast(0.9) brightness(0.666)",
            }} 
          />
        </div>
      </div>
    </section>
  )
}
