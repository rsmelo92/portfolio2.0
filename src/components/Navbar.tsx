import { Link } from "react-router-dom";
import classes from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
      </ul>
    </nav>
  )
}
