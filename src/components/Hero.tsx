import profile from '@/assets/profile.png'
import classes from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.content}>
        <div className={classes.titleWrapper}>
          <h1 className={classes.title}>
            I'm Rafael Melo, a <span className='highlight'>Senior</span> Software Engineer based in Brazil. <span className='highlight'>Cursed</span> by Javascript.
          </h1>
        </div>
        <div>
          <img className={classes.image} src={profile} width={600} height={600} />
        </div>
      </div>
    </section>
  )
}
