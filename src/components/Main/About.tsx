import classes from './About.module.css'

export const About = () => {
  const date = new Date()
  const startedYear = 2014 + 1 
  const years = date.getFullYear() - startedYear
  return (
    <section className={classes.section}>
      <h2 className={classes.title}>About</h2>
      <article className={classes.article}>
        <p>I have {years} years working in the industry and I'm a T-Shaped Senior Frontend Engineer with focus on development with React, Typescript, Tests (TDD) and CSS, but I had the opportunity to work with several technologies, from Golang to Python/Flask and React Native.</p>
        <p>With a consistent historic of not only deliver fine-tuned features, but also give mentorship and improve codebase/inner tools/devops.</p>
        <p>My whole career I've been working remotely, with a consistent experience in highly collaborative and distributed environments.</p>
      </article>
    </section>
  )
}
