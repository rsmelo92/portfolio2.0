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
            <p>With {years} years working as a <span className="highlight">Senior Software Engineer</span> I have a consistent history of not just delivering meticulously crafted features, but also offering mentorship and improving codebase, architecture, and DevOps practices.</p>
            <br/>
            <p>My whole career I've been working remotely in highly <span className="highlight">collaborative</span> and distributed environments.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
