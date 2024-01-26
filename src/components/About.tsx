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
          <div>
            <Xwitter onClick={() => window?.open("https://twitter.com/rsmelo_", '_blank')?.focus()} />
            <Github onClick={() => window?.open("https://github.com/rsmelo92", '_blank')?.focus()} />
            <Linkedin onClick={() => window?.open("https://www.linkedin.com/in/rafael-melo-info/", '_blank')?.focus()} />
          </div>
        </div>
      </div>
    </section>
  )
}

const Linkedin = ({ onClick }: { onClick: () => void }) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    x="0"
    y="0"
    viewBox="0 0 24 24"
  >
    <path d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h14v14H5V5zm2.78 1.316c-.858 0-1.372.516-1.372 1.202 0 .686.514 1.199 1.285 1.199.857 0 1.371-.513 1.371-1.2 0-.685-.514-1.2-1.285-1.2zM6.476 10v7H9v-7H6.477zm4.605 0v7h2.523v-3.826c0-1.14.813-1.303 1.057-1.303s.897.245.897 1.303V17H18v-3.826C18 10.977 17.024 10 15.803 10s-1.873.407-2.198.977V10h-2.523z"></path>
  </svg>
)

const Github = ({ onClick }: { onClick: () => void }) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    x="0"
    y="0"
    viewBox="0 0 32 32"
  >
    <path
      fillRule="evenodd"
      d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
    ></path>
  </svg>
)

const Xwitter = ({ onClick }: { onClick: () => void }) => (
  <svg
    style={{  width:"1.4rem"  }}
    onClick={onClick}
    width="30"
    height="30"
    x="0"
    y="0"
    viewBox="0 0 24 24"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
)
