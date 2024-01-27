import cover from "/works/pages/student/cover.png"
import classes from "./Student.module.css"
import { useEffect, useRef, useState } from "react"

export const Student = () => {
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const [showCover, setShowCover] = useState(false)
  timeout.current = setTimeout(() => {
    setShowCover(true)
  }, 250);

  useEffect(() => {
    return () => {
      setShowCover(false)
      if(timeout.current) clearTimeout(timeout.current)
    }
  }, [])
  
  return (
    <div>
      <div className={classes.cover}>
        <div>
          {showCover ? <img alt="cover" className={classes.animatedImage} src={cover} /> : <img alt="cover" src={cover} />}
        </div>
      </div>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Student Years</h2>
        <article className={classes.article}>
          <p>On my student years I worked on the early semesters as a QA intern, as a freelancer for small local companies and competed on hackathons.</p>
          <p>To get experience as a Fullstack developer I competed in 5 Hackathons, two locals, two national and one international</p>
          <p>Awards:</p>
          <ul>
            <li>- MadIEEE - Internacional IEEE competition (Internacional) [2017] - Computer Society Special Award</li>
            <li>- I Hackathon of University of Salvador (Local) [2017] - First Place prize</li>
            <li>- Hackathon Campus Party Bahia (National) [2018] - First Place Prize</li>
            <li>- Hackathon Campus Party Brasil 12 (National) [2019] - Third Place Prize</li>
            <li>- Hackathon Sucesso CC with Ruy Barbosa University (Local) [2018] - Third Place Prize</li>
          </ul>
        </article>
      </div>
    </div>
  )
}
