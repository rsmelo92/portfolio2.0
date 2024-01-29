import { CodeHtml } from "./html/CodeHtml"
import classes from "./Learning.module.css"


export const Learning = () => {
  return (
    <section className={classes.section}>
      <article className={classes.lesson}>
        <h2 className={classes.title}>Semantic HTML</h2>
        <p>Before HTML5 was released in 2008, most of the web were using divs to mark content</p>
        <p>But now with the semantic tags, we could not only improve accessibility and SEO on the web but also make easier for humans to read the markup content when coding</p>

        <p>Change the html on the screen to a semantic one and make the tests pass.</p>

        <p>Study Reference:</p>
        <ul>
          <li>
            - <a
                href="https://developer.mozilla.org/en-US/docs/Glossary/Semantics"
                target="_blank"
                rel="noreferrer"
              >
                MDN webdocs
              </a>
          </li>
          <li>
            - <a 
                href="https://web.dev/learn/html/semantic-html"
                target="_blank"
                rel="noreferrer"
              >
                web.dev
              </a>
          </li>
          <li>
            - <a href="https://www.freecodecamp.org/news/semantic-html5-elements/"
                target="_blank"
                rel="noreferrer"
              >
                FreeCodeCamp
              </a>
          </li>
        </ul>
      </article>
      <CodeHtml />
    </section>
  )
}
