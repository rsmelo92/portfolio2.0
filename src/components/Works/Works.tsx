import { useState } from "react"
import clsx from "clsx"

import { Modal } from "../Modal"

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

import type { Data } from "../Modal"

type Props = { 
  title?: string
}

export const Works = ({ title }: Props) => {
  const [currentData, setCurrentData] = useState<Data>("")
  const filter = "invert(100%) contrast(0.9) brightness(0.666)";
  return (
    <section className={classes.section}>
      {title && <h2 className={classes.title}>Works</h2>}
      <div className={classes.grid}>
        <div
          className={classes.box}
          role="button"
          tabIndex={0}
          onKeyDown={(event: React.KeyboardEvent) => event.key === 'Enter' && setCurrentData("architect")}
          onClick={() => setCurrentData("architect")}
        >
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
            role="button"
            tabIndex={0}
            onKeyDown={(event: React.KeyboardEvent) => event.key === 'Enter' && setCurrentData("designsystem")}
            onClick={() => setCurrentData("designsystem")}
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
            role="button"
            tabIndex={0}
            onKeyDown={(event: React.KeyboardEvent) => event.key === 'Enter' && setCurrentData("surfe")}
            onClick={() => setCurrentData("surfe")}
            className={classes.boxContent}
            style={{
              backgroundImage:`url(${surfe})`,
              filter,
            }} 
          />
        </div>
        <div className={classes.box}>
          <div
            role="button"
            tabIndex={0}
            onKeyDown={(event: React.KeyboardEvent) => event.key === 'Enter' && setCurrentData("consultar")}
            onClick={() => setCurrentData("consultar")}
            className={classes.boxContent}
            style={{
              backgroundImage:`url(${consultar})`,
            }} 
          />
        </div>
        <div className={classes.box}>
          <div
            role="button"
            tabIndex={0}
            onKeyDown={(event: React.KeyboardEvent) => event.key === 'Enter' && setCurrentData("lesgow")}
            onClick={() => setCurrentData("lesgow")}
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
            role="button"
            tabIndex={0}
            onKeyDown={(event: React.KeyboardEvent) => event.key === 'Enter' && setCurrentData("student")}
            onClick={() => setCurrentData("student")}
            className={classes.boxContent}
            style={{
              backgroundImage:`url(${student})`,
            }} 
          />
        </div>
        <div className={clsx(classes.forceDark, classes.box)}>
          <div
            role="button"
            tabIndex={0}
            onKeyDown={(event: React.KeyboardEvent) => event.key === 'Enter' && setCurrentData("lawsuit")}
            onClick={() => setCurrentData("lawsuit")}
            className={classes.boxContent}
            style={{
              backgroundImage:`url(${lula})`,
              filter,
            }} 
          />
        </div>
        <div className={classes.box}>
          <div
            role="button"
            tabIndex={0}
            onKeyDown={(event: React.KeyboardEvent) => event.key === 'Enter' && setCurrentData("bilheteriapp")}
            onClick={() => setCurrentData("bilheteriapp")}
            className={classes.boxContent}
            style={{
              backgroundImage:`url(${bilheteriapp})`,
            }} 
          />
        </div>
        <div className={clsx(classes.forceDark, classes.box)}>
          <div
            role="button"
            tabIndex={0}
            onKeyDown={(event: React.KeyboardEvent) => event.key === 'Enter' && setCurrentData("onlineoffice")}
            onClick={() => setCurrentData("onlineoffice")}
            className={classes.boxContent}
            style={{
              backgroundImage:`url(${onlineoffice})`,
              backgroundSize: "contain",
              backgroundPosition:"center",
              filter,
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
            role="button"
            tabIndex={0}
            onKeyDown={(event: React.KeyboardEvent) => event.key === 'Enter' && setCurrentData("ooapp")}
            onClick={() => setCurrentData("ooapp")}
            className={classes.boxContent}
            style={{
              backgroundImage:`url(${ooapp})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundColor: "white",
              filter,
            }} 
          />
        </div>
        <div className={classes.box}>
          <div
            className={classes.boxContent}
            style={{
              backgroundImage:`url(${tetris})`,
              filter,
            }} 
          />
        </div>
        {/* TODO: Create pages for works */}
        <Modal data={currentData} onClose={() => setCurrentData("")} />
      </div>
    </section>
  )
}
