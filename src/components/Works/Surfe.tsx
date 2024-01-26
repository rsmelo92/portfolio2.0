import cover from "/works/pages/surfe/surfe.webp"

import classes from "./Student.module.css"

export const Surfe = () => {
  return (
    <div>
      <div className={classes.cover}>
        <div>
          <img className={classes.image} src={cover} />
        </div>
      </div>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Surfe Chrome Extension</h2>
        <article className={classes.article}>
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
