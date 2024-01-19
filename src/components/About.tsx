import { Chat } from "@/components/Chat/Chat"
import classes from './About.module.css'

export const About = () => {
  const date = new Date()
  const startedYear = 2014 + 1 
  const years = date.getFullYear() - startedYear
  return (
    <section className={classes.section}>
      <Chat />
      <div className={classes.about}>
        <h2 className={classes.title}>About</h2>
        <div className={classes.content}>
          <article className={classes.article}>
            <p>I have {years} years working as a Senior Software Engineer.</p>
            <p>With a consistent history of not only delivering fine-tuned features, but also giving mentorship and improve codebase/inner tools/devops.</p>
            <p>My whole career I've been working remotely, with a consistent experience in highly collaborative and distributed environments.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
