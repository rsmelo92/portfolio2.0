import cover from "/works/pages/surfe/surfe.webp"

import classes from "./Surfe.module.css"

export const Surfe = () => {
  return (
    <div>
      <div className={classes.cover}>
        <div>
          <img alt="cover" className={classes.image} src={cover} />
        </div>
      </div>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Surfe Chrome Extension</h2>
        <article className={classes.article}>
          <p>Surfe is a Chrome Extension that brings your CRM (HubSpot, Salesforce, Pipedrive, Copper) to LinkedIn and other venues, integrating and synchronizing seamlessly with the most widespread suite of preferred tools.</p>
          <p>Technologies Used:</p>
          <ul>
            <li>- MadIEEE - Internacional IEEE competition (Internacional) [2017] - Computer Society Special Award</li>
          </ul>
        </article>
      </div>
    </div>
  )
}
