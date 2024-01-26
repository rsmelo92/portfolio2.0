import { useCallback, useEffect, useRef, useState } from 'react'
import { Student } from './Works/Student'

import classes from './Modal.module.css'
import { Architect } from './Works/Architect'
import { Consulta } from './Works/Consulta'
import { Lesgow } from './Works/Lesgow'
import { OOApp } from './Works/OOApp'
import { Surfe } from './Works/Surfe'
import { DesignSystem } from './Works/DesignSystem'
import { Lawsuit } from './Works/Lawsuit'
import { Bilheteriapp } from './Works/Bilheteriapp'
import { OnlineOffice } from './Works/OnlineOffice'

type Props = {
  data: Data
  onClose: () => void
}

export type Data =  "" | "architect" | "designsystem" | "surfe" | "consultar" | "lesgow" | "student" | "lawsuit" | "bilheteriapp" | "onlineoffice" | "ooapp"

export const Modal = ({ data, onClose }: Props) => {
  const Component = data && WORKS[data]

  const [currentData, setCurrentData] = useState(data)
  const modalRef = useRef<HTMLDivElement>(null);
  const initY = modalRef?.current?.getBoundingClientRect().y

  const closeModal = useCallback(() => {
    if(modalRef.current === null) return
    modalRef.current.style.transform = `translateY(100vh)`;
    onClose()
    setCurrentData("")
  }, [onClose])

  useEffect(() => {
    if(data === "" || modalRef.current === null) return
    modalRef.current.style.transform = `translateY(20px)`;
    setCurrentData(data)
    document.querySelector("body")?.classList.add("body-freeze");
    return () => {
      document.querySelector("body")?.classList.remove("body-freeze");
    }
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
  
  return (
    <div
        ref={modalRef}
        className={classes.modal}
    >
      <div 
        className={classes.dragbarWrapper}
        onDrag={(e: React.DragEvent<HTMLDivElement>) => {
          e.preventDefault();
          if(modalRef.current === null) return
          if(currentData === "") return

          const movement = e.clientY
          if(movement > 200) return closeModal()
          if(initY && (movement >= initY)) return

          if(movement === 0) {
            modalRef.current.style.transform = `translateY(20px)`;
            return 
          }
          modalRef.current.style.transform = `translateY(${movement}px)`;
        }}
        draggable
      >
        <div className={classes.dragbar} />
      </div>
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
      {Component && <Component />}
      </div>
    </div>
  )
}

const WORKS = {
  "architect": Architect,
  "designsystem": DesignSystem,
  "surfe":  Surfe,
  "consultar":  Consulta,
  "lesgow":  Lesgow,
  "student": Student,
  "lawsuit":  Lawsuit,
  "bilheteriapp":  Bilheteriapp,
  "onlineoffice":  OnlineOffice,
  "ooapp":  OOApp,
  "": null
}
