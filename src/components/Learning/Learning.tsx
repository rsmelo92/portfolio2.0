import { CodeHtml } from "./html/CodeHtml"
import classes from "./Learning.module.css"


export const Learning = () => {
  return (
    <section className={classes.section}>
      <div>Create a html page</div>
      <CodeHtml />
    </section>
  )
}
