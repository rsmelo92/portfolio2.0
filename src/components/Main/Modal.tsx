import { useCallback, useEffect, useState } from 'react'
import terminal from "/works/pages/terminal.gif"

import classes from './Modal.module.css'

type Props = {
  data: Data
  onClose: () => void
}

export type Data =  "" | "architect" | "designsystem" | "surfe" | "consultar" | "lesgow" | "student" | "lawsuit" | "bilheteriapp" | "onlineoffice" | "ooapp"

export const Modal = ({ data, onClose }: Props) => {
  const initialPosition = "100vh"
  const [topPosition, setTopPosition] = useState(initialPosition);

  const closeModal = useCallback(() => {
    setTopPosition(initialPosition)
    onClose()
  }, [onClose])

  useEffect(() => {
    if(data === "") return
    setTopPosition("20px")
  }, [data])

  useEffect(() => {
    const handleKeyDown = (evt: KeyboardEvent) => {
      if (evt.key !== "Escape") return
      closeModal()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [closeModal])
  
  const work = data && WORKS[data]

  return (
    <div
      style={{ top: topPosition }}
      className={classes.modal}
    >
      <div className={classes.header}>
        <button
          type='button'
          onClick={closeModal}
        >
          <span>
            X
          </span>
        </button>
      </div>
      <div>
        {work && (
          <>
            <div className={classes.cover}>
              <img src={work.image} />
            </div>
            <div className={classes.body}>
              <h3 className={classes.title}>
                {work.title}
              </h3>
              <p className={classes.content}>{work.content}</p>
            </div>
          </>
        )}
    </div>
    </div>
  )
}

const WORKS = {
  "architect" : {
    title: "Senior Software Architect at Dev Experience Team (DevX)",
    image: terminal,
    content: "In this architectural role inside cross teams I was responsible for"
  },
  "designsystem": {
    title: "Design Systems",
    image:"",
    content: ""
  },
  "surfe": {
    title: "Surfe",
    image:"",
    content: ""
  },
  "consultar": {
    title: "Consultar Processos",
    image:"",
    content: ""
  },
  "lesgow": {
    title: "Lesgow",
    image:"",
    content: ""
  },
  "student": {
    title: "Student Years",
    image:"",
    content: ""
  },
  "lawsuit": {
    title: "Lawsuit",
    image:"",
    content: ""
  },
  "bilheteriapp": {
    title: "Bilheteriapp",
    image:"",
    content: ""
  },
  "onlineoffice": {
    title: "Online Office",
    image:"",
    content: ""
  },
  "ooapp": {
    title: "Online Office Mobile App",
    image:"",
    content: ""
  },
}
