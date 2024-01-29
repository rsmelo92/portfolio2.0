import classes from "./Learning.module.css"

type Props = {
  title: string
  children: React.ReactNode
}

export const Learning = ({ title, children }: Props) => {
  return (
    <article className={classes.lesson}>
      <h2 className={classes.title}>{title}</h2>
      {children}
    </article>
  )
}
