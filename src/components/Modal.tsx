import { useCallback, useEffect, useState } from 'react'
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
  const initialPosition = "100vh"
  const [topPosition, setTopPosition] = useState(initialPosition);

  const closeModal = useCallback(() => {
    setTopPosition(initialPosition)
    onClose()
  }, [onClose])

  useEffect(() => {
    if(data === "") return
    setTopPosition("20px")
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
  
  const Component = data && WORKS[data]

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
