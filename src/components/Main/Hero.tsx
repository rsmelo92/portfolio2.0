import classes from './Hero.module.css'
import profile from '@/assets/profile.png'

export const Hero = () => {
  return (
    <section className={classes.hero}>
      <h1 className={classes.title}>
        I'm Rafael Melo, a <span>Senior</span> Frontend Engineer based in Brazil. <span>Cursed</span> by Javascript.
      </h1>
      <img src={profile} width={600} height={600} />
    </section>
  )
}
